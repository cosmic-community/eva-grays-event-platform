# 🎉 Eva Gray's Event Platform

![App Preview](https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=300&fit=crop&auto=format)

A modern, elegant event management and showcase platform built specifically for Eva Gray's events. This application displays upcoming events, past events, event details, and allows users to explore Eva's event portfolio with a beautiful, user-friendly interface powered by Cosmic CMS.

## ✨ Features

- 📅 **Upcoming Events**: Browse and explore Eva's upcoming events with detailed information
- 📚 **Past Events Archive**: View completed events in an organized, searchable format
- 🎨 **Event Details**: Comprehensive event pages with descriptions, dates, locations, and cover images
- 📱 **Fully Responsive**: Optimized experience across all devices and screen sizes
- 🚀 **Fast Performance**: Built with Next.js 16 and optimized with React Server Components
- 🎯 **SEO Optimized**: Proper meta tags and structured data for better discoverability
- 🖼️ **Image Optimization**: Automatic image optimization using imgix for fast loading
- 🎭 **Modern UI**: Clean, professional design with smooth animations and transitions

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6930124dd5a5a92b05b80fef&clone_repository=69301690d5a5a92b05b81c30)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a blog with posts, authors, and categories"

### Code Generation Prompt

> "https://luma.com/user/EvaGray"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Cosmic CMS
- **SDK**: @cosmicjs/sdk v1.5.6
- **Package Manager**: Bun
- **Deployment**: Vercel-ready

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun installed
- A Cosmic account and bucket
- Basic knowledge of React and Next.js

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd eva-gray-event-platform
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Set up environment variables**
   
   Your Cosmic environment variables are automatically configured. The following variables are already set up in your deployment:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
   - `COSMIC_WRITE_KEY`

4. **Run the development server**
   ```bash
   bun run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Cosmic SDK Examples

### Fetching Events

```typescript
import { cosmic } from '@/lib/cosmic'

// Get all upcoming events
const { objects: upcomingEvents } = await cosmic.objects
  .find({ 
    type: 'events',
    'metadata.date': { $gte: new Date().toISOString() }
  })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Get a single event by slug
const { object: event } = await cosmic.objects
  .findOne({
    type: 'events',
    slug: 'event-slug'
  })
  .props(['id', 'title', 'slug', 'metadata', 'content'])
  .depth(1)
```

### Working with Event Metadata

```typescript
interface Event {
  id: string
  title: string
  slug: string
  metadata: {
    date: string
    location?: string
    cover_image?: {
      url: string
      imgix_url: string
    }
    description?: string
  }
  content?: string
}
```

## 🎨 Cosmic CMS Integration

This application uses Cosmic CMS for content management with the following structure:

### Content Types

- **Events**: Event listings with metadata including date, location, and cover images

### Key Features

- **Dynamic Content**: All event data is fetched from Cosmic CMS in real-time
- **Image Optimization**: Images are automatically optimized using imgix parameters
- **Flexible Metadata**: Event details are stored in structured metadata fields
- **Server-Side Rendering**: Content is fetched server-side for optimal performance

### Adding New Events

1. Log in to your Cosmic dashboard
2. Navigate to your bucket
3. Create a new "Events" object
4. Fill in the required fields:
   - Title
   - Date (metadata field)
   - Location (optional metadata field)
   - Cover Image (metadata field)
   - Description (metadata field)
5. Publish the event

The new event will automatically appear on your site!

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your repository

3. **Environment Variables**
   
   Your Cosmic environment variables are automatically configured during deployment.

4. **Deploy**
   
   Click "Deploy" and your site will be live in minutes!

### Other Deployment Options

This Next.js application can be deployed to any platform that supports Node.js:
- Netlify
- AWS Amplify
- Railway
- Render

Make sure to set your Cosmic environment variables in your hosting platform's dashboard.

## 📝 Environment Variables

Your environment variables are automatically configured. The required variables are:

- `COSMIC_BUCKET_SLUG`: Your Cosmic bucket slug
- `COSMIC_READ_KEY`: Your Cosmic read key
- `COSMIC_WRITE_KEY`: Your Cosmic write key (for write operations)

## 🎯 Key Features Explained

### Upcoming vs Past Events

Events are automatically filtered based on their date:
- **Upcoming**: Events with dates in the future
- **Past**: Events with dates in the past

### Image Optimization

All images use imgix optimization parameters:
```typescript
`${image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`
```

### Responsive Design

The application uses Tailwind CSS with responsive classes:
- Mobile-first design approach
- Grid layouts that adapt to screen size
- Optimized touch targets for mobile users

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org)
- Powered by [Cosmic CMS](https://www.cosmicjs.com)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Inspired by modern event platforms

---

**Need help?** Check out the [Cosmic documentation](https://www.cosmicjs.com/docs) or reach out to the community!

<!-- README_END -->