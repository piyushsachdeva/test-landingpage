import React from 'react';
import { Youtube, Share2, Import, Sparkles, Rocket, Heart } from 'lucide-react';

function App() {
  const channelUrl = 'https://www.youtube.com/@TechTutorialswithPiyush';

  const handleShare = async () => {
    try {
      // Check if Web Share API is supported and available
      if (navigator.share && navigator.canShare) {
        const shareData = {
          title: '#28daysofazterraform',
          text: 'Check out this amazing Terraform series with Azure!',
          url: channelUrl
        };

        if (navigator.canShare(shareData)) {
          await navigator.share(shareData);
          return;
        }
      }
    } catch (error) {
      // Silently handle the error and fall back to default behavior
    }

    // Fallback: Copy to clipboard and open channel
    try {
      await navigator.clipboard.writeText(channelUrl);
      window.open(channelUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      // If clipboard API fails, just open the channel
      window.open(channelUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-950 to-purple-950 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 animate-pulse">
            ✨ Welcome to #28daysofazterraform 🚀
          </h1>
          
          <div className="bg-gradient-to-r from-black/80 to-blue-950/80 backdrop-blur-lg rounded-xl p-8 mb-12 shadow-xl border border-purple-500/20">
            <p className="text-2xl leading-relaxed mb-6 font-light">
              This is an end to end terraform series with Azure and one of my 
              <span className="font-semibold text-blue-400"> most requested series </span> 
              on my channel: 
              <span className="font-bold text-purple-400">techtutorialswithpiyush</span> 🎯
            </p>
            
            <div className="text-xl text-blue-200 mb-6 italic">
              🎥 This landing page is from video 24 where we are learning 
              <span className="font-bold text-purple-400"> Terraform import </span> 
              using a realtime project
            </div>
          </div>

          {/* Import Methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-black/90 to-blue-950/90 p-8 rounded-xl backdrop-blur-sm hover:scale-105 transition-all duration-300 border border-blue-500/20 shadow-lg group">
              <Import className="w-16 h-16 mb-4 mx-auto text-blue-400 group-hover:text-purple-400 transition-colors" />
              <h3 className="text-2xl font-bold mb-2">⚡ Terraform Import</h3>
            </div>
            <div className="bg-gradient-to-br from-black/90 to-blue-950/90 p-8 rounded-xl backdrop-blur-sm hover:scale-105 transition-all duration-300 border border-blue-500/20 shadow-lg group">
              <Sparkles className="w-16 h-16 mb-4 mx-auto text-purple-400 group-hover:text-blue-400 transition-colors" />
              <h3 className="text-2xl font-bold mb-2">🔄 Azure Export</h3>
            </div>
            <div className="bg-gradient-to-br from-black/90 to-blue-950/90 p-8 rounded-xl backdrop-blur-sm hover:scale-105 transition-all duration-300 border border-blue-500/20 shadow-lg group">
              <Rocket className="w-16 h-16 mb-4 mx-auto text-blue-400 group-hover:text-purple-400 transition-colors" />
              <h3 className="text-2xl font-bold mb-2">🛠️ Terraformer</h3>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-black/80 to-blue-950/80 backdrop-blur-lg rounded-xl p-8 shadow-xl border border-purple-500/20">
            <p className="text-2xl mb-8 font-light">
              If you had a good learning experience make sure to 
              <span className="font-bold text-blue-400"> subscribe </span> 
              to the channel and 
              <span className="font-bold text-purple-400"> share </span> 
              with your friends and colleagues! 
              <Heart className="w-6 h-6 inline-block ml-2 text-blue-400 animate-pulse" />
            </p>
            <div className="flex justify-center gap-6">
              <a 
                href={channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 px-8 py-4 rounded-xl transition-all duration-300 font-bold text-lg shadow-lg hover:scale-105 group"
              >
                <Youtube className="w-6 h-6 group-hover:scale-110 transition-transform" />
                Subscribe
              </a>
              <button 
                onClick={handleShare}
                className="flex items-center gap-3 bg-gradient-to-r from-purple-900 to-purple-700 hover:from-purple-800 hover:to-purple-600 px-8 py-4 rounded-xl transition-all duration-300 font-bold text-lg shadow-lg hover:scale-105 group"
              >
                <Share2 className="w-6 h-6 group-hover:scale-110 transition-transform" />
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;