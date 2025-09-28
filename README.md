# React App Deployment on DigitalOcean

This guide explains how to deploy a React application on a DigitalOcean Droplet using Nginx.

---

## Prerequisites

* A DigitalOcean account
* A React project ready for deployment
* SSH access to your Droplet
* Optional: A custom domain (e.g., `peacechan.dev`)

---

## Steps to Deploy

### 1. Create a DigitalOcean Droplet

1. Go to [DigitalOcean](https://www.digitalocean.com/) and sign in or create an account.
2. Create a new Droplet using an Ubuntu image.
3. Choose a plan based on your needs (a small plan is fine for small projects).
4. Add SSH keys for secure access (or use a password if you prefer).
5. Select a datacenter region and create the Droplet.

### 2. Access Your Droplet

Connect to your Droplet using SSH:

```bash
ssh root@your_droplet_ip
```

### 3. Set Up Node.js and NPM

Install Node.js and NPM on your Droplet:

```bash
sudo apt update
sudo apt install nodejs
sudo apt install npm
```

### 4. Install Nginx (Optional but Recommended)

Install Nginx to serve your React app:

```bash
sudo apt install nginx
```

### 5. Clone Your Git Repository

Clone your React app repository:

```bash
git clone <your-repo-url>
cd <your-repo-folder>
```

### 6. Build Your React App

Install dependencies and create a production build:

```bash
npm install
npm run build
```

> Note: React apps created with Create React App generate the build in the `build/` folder. If your project uses `dist/`, replace `build/` with `dist/` in the following commands.

### 7. Transfer the Build Files to Your Droplet

Upload the build files to Nginx's web directory:

```bash
scp -r build/* root@your_droplet_ip:/var/www/html
```

### 8. Configure Nginx

Edit the Nginx configuration:

```bash
sudo nano /etc/nginx/sites-available/default
```

Replace the file content with:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;  # Use your domain or Droplet IP

    root /var/www/html;
    index index.html;

    location / {
        try_files $uri /index.html;
    }
}
```

### 9. Restart Nginx

Apply the new configuration:

```bash
sudo nginx -t
sudo systemctl restart nginx
```

### 10. Test the Deployment

Open a browser and navigate to:

```
http://yourdomain.com
```

or

```
http://your_droplet_ip
```

You should see your React application live.

---

## Optional: Configure HTTPS with Let’s Encrypt

1. Install Certbot:

```bash
sudo apt install certbot python3-certbot-nginx
```

2. Run Certbot to generate and configure SSL:

```bash
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

3. Verify HTTPS by visiting:

```
https://yourdomain.com
```

---

## Notes

* React build files are static, so you don’t need Node.js to serve the production app; Nginx is sufficient.
* Always ensure your domain DNS points to your Droplet's IP before setting up HTTPS.

---

**Author:** Your Name
**Date:** YYYY-MM-DD
