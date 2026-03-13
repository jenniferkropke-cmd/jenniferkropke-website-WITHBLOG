# Blog Setup Instructions

## What Was Added

Your website now has a fully functional blog with a content management system (CMS)!

### New Features:
- **Blog listing page** at `/blog` - Shows all your blog posts
- **Individual blog post pages** at `/blog/post-name` - Each post has its own page
- **Admin panel** at `/admin` - Where you write and publish posts
- **Sample blog post** - "Welcome to My Blog" to get you started

---

## How to Enable the Admin Panel (One-Time Setup)

After you deploy this updated code, you need to enable Netlify Identity:

1. Go to your Netlify dashboard
2. Click on your site
3. Go to **Site configuration** → **Identity**
4. Click **Enable Identity**
5. Scroll down to **Registration preferences** and select **Invite only** (recommended)
6. Scroll down to **Git Gateway** and click **Enable Git Gateway**

---

## How to Create Your First Blog Post

1. Go to `yoursite.com/admin`
2. You'll be prompted to set up your account (first time only)
3. Click **New Blog Posts**
4. Fill in:
   - **Title**: Your post title
   - **Publish Date**: When you want it published
   - **Featured Image**: Optional header image (you can upload or paste URL)
   - **Excerpt**: Short summary (shows on blog listing page)
   - **Body**: Your full article (supports markdown formatting)
   - **Tags**: Optional keywords (comma-separated)
5. Click **Publish** → **Publish now**
6. Your post will auto-deploy to your site in ~1-2 minutes!

---

## Markdown Formatting Tips

In the **Body** field, you can use markdown:

```markdown
# Heading 1
## Heading 2
### Heading 3

**bold text**
*italic text*

- Bullet point 1
- Bullet point 2

[Link text](https://example.com)

![Image alt text](https://image-url.com/image.jpg)
```

---

## File Structure

- `/public/blog/` - Your blog posts are stored here as `.md` files
- `/public/admin/` - The CMS admin interface
- `/public/images/uploads/` - Where uploaded images are stored

---

## Important Notes

- The admin panel saves posts as markdown files in your GitHub repo
- Each time you publish/edit a post, GitHub triggers a new Netlify deployment
- Posts are automatically sorted by date (newest first)
- You can edit or delete posts from the admin panel anytime

---

## Need Help?

- Visit the CMS at `/admin` to manage posts
- View your blog at `/blog`
- The sample post shows how everything looks
