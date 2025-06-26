# NucleasAI

AI-native Customer Data Platform with autonomous agents, intelligent routing, and real-time customer intelligence.

## 🚀 Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** ShadCN UI
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Charts:** Recharts
- **3D Globe:** Cobe

## 📁 Project Structure

```
nucleas-ai/
├── nucleas-next/          # Next.js application
│   ├── src/
│   │   ├── app/           # Next.js App Router pages
│   │   ├── components/    # UI, layout, and section components
│   │   └── lib/          # Utilities and configurations
│   ├── public/           # Static assets
│   └── package.json      # Next.js dependencies
├── package.json          # Root project configuration
└── README.md            # This file
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm 8+

### Installation

1. **Install dependencies:**
   ```bash
   npm run install-deps
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run install-deps` - Install dependencies

## 🌟 Features

- **AI-Native CDP:** Built from the ground up with artificial intelligence
- **Autonomous Agents:** Self-learning agents that work 24/7
- **Real-time Intelligence:** Live customer data processing and insights
- **Modern UI:** Beautiful, responsive design with glassmorphism effects
- **SEO Optimized:** Built-in SEO features with Next.js
- **Performance:** Optimized for speed and user experience

## 📄 Pages

- **Home** (`/`) - Landing page with hero section and features
- **About** (`/about`) - Company information and team
- **Product** (`/product`) - Product features and capabilities
- **Solutions** (`/solutions`) - Industry-specific solutions
- **Pricing** (`/pricing`) - Pricing plans and packages
- **Blog** (`/blog`) - Company blog and insights
- **Contact** (`/contact`) - Contact form and information
- **Signup** (`/signup`) - User registration
- **Login** (`/login`) - User authentication

## 🔧 Development

### Component Structure

- `src/components/ui/` - Reusable UI components (ShadCN)
- `src/components/layout/` - Layout components (Header, Footer, Navigation)
- `src/components/sections/` - Page sections and features

### Styling

- Tailwind CSS for utility-first styling
- Custom CSS variables for theming
- Responsive design with mobile-first approach

### State Management

- React hooks for local state
- Context API for global state (if needed)
- Server-side state with Next.js

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

- **Netlify:** Use `npm run build` and deploy the `out` directory
- **AWS Amplify:** Connect your repository and deploy
- **Docker:** Use the provided Dockerfile

## 📝 Environment Variables

Create a `.env.local` file in the `nucleas-next` directory:

```env
NEXT_PUBLIC_DEMO_SCHEDULE_URL=your_demo_schedule_url
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, email hello@nucleasai.com or create an issue in this repository.

---

**NucleasAI** - The Nucleus of Customer Intelligence
