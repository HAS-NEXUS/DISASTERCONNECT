# DisasterConnect - Emergency Response Platform

A comprehensive disaster management and community support platform built with React, TypeScript, and Supabase.

## 🌟 Features

### Real-Time Disaster Monitoring
- Interactive 3D globe with live disaster markers
- Real-time news feed integration
- Multi-category threat tracking (natural disasters, health, conflict, etc.)
- Severity-based alert system

### Community Forum
- Location-based community posts
- Emergency post flagging
- Resource sharing and coordination
- Real-time updates and notifications

### Safety Guide & Protocols
- Comprehensive emergency protocols for all disaster types
- Step-by-step safety procedures
- Downloadable PDF guides
- Interactive checklists

### Emergency Resources
- Resource location finder with GPS integration
- Capacity tracking and availability
- Contact information and directions
- User-contributed resource database

### Emergency Features Hub
- Emergency contacts management
- Evacuation route planning
- Voice command support
- Offline accessibility

### PWA Capabilities
- Offline functionality
- Push notifications
- Native app experience
- Background sync

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Three.js** - 3D globe visualization
- **Leaflet** - Interactive maps

### Backend & Database
- **Supabase** - Backend-as-a-Service
- **PostgreSQL** - Relational database
- **Row Level Security** - Data protection
- **Real-time subscriptions** - Live updates

### APIs & Services
- **NewsData.io** - Real-time disaster news
- **Geolocation API** - Location services
- **Web Speech API** - Voice commands
- **Push Notifications API** - Alert system

### Development Tools
- **Vite** - Fast build tool
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **PWA** - Progressive Web App features

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/disaster-connect.git
cd disaster-connect
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Configure your `.env` file:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_NEWSDATA_API_KEY=your_newsdata_api_key
```

5. Start the development server:
```bash
npm run dev
```

## 📱 PWA Installation

DisasterConnect is a Progressive Web App that can be installed on any device:

1. **Desktop**: Click the install button in your browser's address bar
2. **Mobile**: Use "Add to Home Screen" from your browser menu
3. **Features**: Works offline, receives push notifications, native app experience

## 🗄️ Database Schema

The application uses Supabase with the following main tables:

- **profiles** - User profile information
- **posts** - Community forum posts
- **emergency_resources** - Emergency facilities and resources

## 🔧 Configuration

### Supabase Setup
1. Create a new Supabase project
2. Run the provided SQL migrations
3. Configure Row Level Security policies
4. Set up authentication providers

### API Keys
- **NewsData.io**: For real-time disaster news
- **Supabase**: For backend services
- **Optional**: Additional mapping services

## 🌍 Deployment

### Netlify (Recommended)
```bash
npm run build
# Deploy dist/ folder to Netlify
```

### Manual Deployment
```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Emergency Contacts

For life-threatening emergencies, always call your local emergency services:
- **US**: 911
- **EU**: 112
- **UK**: 999

## 🙏 Acknowledgments

- Emergency response organizations worldwide
- Open source community
- Disaster preparedness experts
- Beta testers and contributors

## 📞 Support

For support and questions:
- Create an issue on GitHub
- Check the documentation
- Contact the development team

---

**DisasterConnect** - Connecting Communities in Crisis 🌍