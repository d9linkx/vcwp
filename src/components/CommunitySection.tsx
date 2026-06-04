import React, { useState } from 'react';
import { MessageSquare, Heart, Search, ChevronDown, ChevronUp, AlertCircle, Sparkles, HelpCircle, Sparkle } from 'lucide-react';
import { ForumPost, FAQItem } from '../types';

export default function CommunitySection() {
  const [posts, setPosts] = useState<ForumPost[]>([
    {
      id: "1",
      authorName: "Musa Ibrahim",
      authorLocation: "Kano State",
      authorRole: "School Administrator (Age 52)",
      title: "Vibe coding is perfect for school score sheets!",
      content: "I always wanted an app to calculate our term grades and ranks without learning heavy programmers stuff. Under 1 hour during my trial, I explained the maths grid to my system, and it vibe-coded my ideal scorecard sharp-sharp! This course is a life saver.",
      likes: 42,
      commentsCount: 6,
      category: "success",
      date: "2 hours ago",
      hasLiked: false
    },
    {
      id: "2",
      authorName: "Chioma Nduka",
      authorLocation: "Enugu State",
      authorRole: "Fashion Wholesaler (Age 28)",
      title: "Alaba & Balogun shop order builders are real!",
      content: "Instead of complex e-commerce Shopify coding which costs tons of Dollars, I just designed a dynamic WhatsApp product ledger. Buyers type details, it vibes the WhatsApp payload, and sends orders directly. Very sweet!",
      likes: 31,
      commentsCount: 3,
      category: "success",
      date: "5 hours ago",
      hasLiked: false
    },
    {
      id: "3",
      authorName: "Femi Adebayo",
      authorLocation: "Lagos State",
      authorRole: "Retired Banker (Age 64)",
      title: "Can my age group join this movement?",
      content: "My son said coding is only for youth. But during the pre-cohort, I realized I just need to describe the flow in clean English. Is there any group for seniors where we can share resources together?",
      likes: 19,
      commentsCount: 12,
      category: "question",
      date: "1 day ago",
      hasLiked: false
    }
  ]);

  const [faqSearch, setFaqSearch] = useState("");
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>(null);

  const faqs: FAQItem[] = [
    {
      id: "faq1",
      question: "Is there any age limits to participate?",
      answer: "None! We welcome students from age 11 up to seniors of 70+. As Vibe Coding values clear logical English/Pidgin instructions over programming syntax, anyone can master it.",
      category: "General"
    },
    {
      id: "faq2",
      question: "Is this course really ₦1,000? Aren't there hidden fees?",
      answer: "Yes, exactly ₦1,000 one-off commitment to Prince Chidera Dike's Kuda Bank account. There are zero hidden costs. Prince has personally sponsored and supported this initiative to democratize practical AI and software literacy across Nigeria.",
      category: "Payment"
    },
    {
      id: "faq3",
      question: "Can I do this training with a smartphone?",
      answer: "Absolutely! You don't need a high-end computer to start. You can craft prompt blueprints, test system schemas, and join all interactive coaching workspaces on your standard mobile phone.",
      category: "Requirements"
    },
    {
      id: "faq4",
      question: "Can we connect our apps to Google Sheets?",
      answer: "Yes, you can easily use Google Sheets like an online notebook. Our apps can read and save tables of names or scores in your sheets cleanly during the classes!",
      category: "Technical"
    },
    {
      id: "faq5",
      question: "Where will the class happen virtually and physically?",
      answer: "Virtual streaming holds on Zoom & Google Meet (Saturday, June 13). Physical cohort workshops meet in our Sango Ibadan hub or the student's comfortable chosen location (home, etc) (Sunday, June 14). Session recordings are shared fully.",
      category: "Schedule"
    },
    {
      id: "faq6",
      question: "What is AI and Vibe Coding in simple words?",
      answer: "Vibe Coding is like having a magical helper! Instead of writing confusing computer signs like semicolons and brackets, you just talk to your AI assistant in simple, everyday English or Pidgin. The AI reads your wishes and builds the app for you. Anyone can do it!",
      category: "General"
    },
    {
      id: "faq7",
      question: "Do I need to be a math genius or super smart?",
      answer: "Not at all! If you know how to read simple words and count on your fingers, you are fully ready to start. The computer does all the hard math sums for you. You only need your imagination!",
      category: "General"
    },
    {
      id: "faq8",
      question: "Will I get a beautiful certificate to show off?",
      answer: "Yes, indeed! You will get a colorful digital VibeCode certificate with your name written on it. You can print it out and show it proudly to your parents, school teachers, and friends.",
      category: "General"
    },
    {
      id: "faq9",
      question: "How long does the ₦1,000 Beginner's Class last?",
      answer: "It is a highly engaging, 3-hour fun workshop! We will build simple games together, make some jokes, and you will see your own brand new app working live on your smartphone before we finish.",
      category: "Schedule"
    },
    {
      id: "faq10",
      question: "Is there support if I get stuck or make a mistake?",
      answer: "Yes, don't worry! All registered students get a link to join our friendly WhatsApp channel. If your code stops working, you can snap a picture, share it there, and Coach Prince or our class helpers will guide you on how to ask the AI to fix it instantly.",
      category: "General"
    },
    {
      id: "faq11",
      question: "What is the difference between the ₦1,000 Class and the Masterclass?",
      answer: "The ₦1,000 class is a fun group introduction where everyone builds a basic web app together. The ₦20,000 Masterclass is your own private 1-on-1 space with Coach Prince for 1 whole month to build any custom dream app or game that is in your head!",
      category: "Mentorship"
    },
    {
      id: "faq12",
      question: "How do Masterclass batches and duration work?",
      answer: "The Masterclass mentorship lasts for exactly 1 month of close support. A new masterclass batch starts every single week, but because Coach Prince only has space for a few students in each batch, prices may increase for future batches. It is best to register early!",
      category: "Mentorship"
    },
    {
      id: "faq13",
      question: "Is the physical hub safe for children and teenagers?",
      answer: "Yes, 100%! Our physical spaces are clean, safe, and fully secure. Our helpers supervise everything closely. Parents are very welcome to drop off their children or stay with them to see how we learn.",
      category: "Requirements"
    },
    {
      id: "faq14",
      question: "How do I make the payment to join?",
      answer: "You can do a quick Bank Transfer from your parent's phone, or pay via a POS shop to our Kuda Bank account listed on the success page. Once done, just snap your payment receipt and click the WhatsApp confirmation button!",
      category: "Payment"
    },
    {
      id: "faq15",
      question: "What cool games or apps can I make first?",
      answer: "You can build interactive calculators, digital lists of your cool school friends, custom text adventure games, secret diaries, birthday cards, and habit checklists to share with family!",
      category: "Technical"
    }
  ];

  const handleLikePost = (postId: string) => {
    setPosts(prev => prev.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.hasLiked ? post.likes - 1 : post.likes + 1,
          hasLiked: !post.hasLiked
        };
      }
      return post;
    }));
  };

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(faqSearch.toLowerCase()) || 
    faq.answer.toLowerCase().includes(faqSearch.toLowerCase())
  );

  return (
    <section id="community" className="bg-zinc-50 py-16 md:py-24 border-b border-zinc-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#2563eb] bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full">
            Cohort Mastermind
          </span>
          <h2 className="text-3xl font-black tracking-tight text-zinc-950 sm:text-4xl">
            Vibe Forums & Interactive Community
          </h2>
          <p className="text-zinc-500 font-sans leading-relaxed text-sm sm:text-base font-light">
            You are never learning on an island. Meet other tech builders on Nigeria's largest forum for beginners and seniors. Tap 'like' or browse forum updates live!
          </p>
        </div>

        {/* Forums grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {/* Forum Column */}
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-1">
              <h3 className="text-sm font-bold text-zinc-800 uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-emerald-600" />
                Live Forum Feed (Nigeria Hub)
              </h3>
              <span className="text-[10px] font-mono bg-emerald-50 border border-emerald-200 text-emerald-800 px-2.5 py-1 rounded-full font-bold">
                Online Chatting: 1,402
              </span>
            </div>

            <div className="space-y-4">
              {posts.map((post) => (
                <div key={post.id} className="bg-white p-6 sm:p-7 rounded-2xl border border-zinc-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.01)] space-y-4 transition-all hover:border-zinc-350 hover:shadow-sm">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h4 className="font-bold text-zinc-950 text-sm sm:text-base font-display">{post.title}</h4>
                      <p className="text-[11px] text-zinc-500 mt-1.5 leading-relaxed">
                        By <span className="font-extrabold text-zinc-800">{post.authorName}</span> ({post.authorRole}) &bull; <span className="font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded text-[10px]">{post.authorLocation}</span>
                      </p>
                    </div>
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded-md uppercase shrink-0 ${
                      post.category === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-blue-50 text-blue-700 border border-blue-100'
                    }`}>
                      {post.category}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-sans font-light">
                    {post.content}
                  </p>

                  <div className="flex items-center gap-4 text-[11px] font-mono text-zinc-400 border-t border-zinc-100 pt-4 mt-1">
                    <button 
                      onClick={() => handleLikePost(post.id)}
                      className={`inline-flex items-center gap-1.5 transition-all outline-none cursor-pointer ${
                        post.hasLiked ? 'text-red-500 font-bold' : 'hover:text-zinc-700'
                      }`}
                    >
                      <Heart className={`h-4.5 w-4.5 transition-colors ${post.hasLiked ? 'fill-current text-red-500' : 'text-zinc-300'}`} />
                      <span>{post.likes}</span>
                    </button>
                    <div className="inline-flex items-center gap-1.5">
                      <MessageSquare className="h-4.5 w-4.5 text-zinc-300" />
                      <span>{post.commentsCount} comments</span>
                    </div>
                    <span className="ml-auto text-[10px] text-zinc-400">{post.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Searchable FAQs Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-zinc-800 uppercase tracking-wider flex items-center gap-2 pb-1">
              <HelpCircle className="h-4 w-4 text-emerald-600" />
              Frequently Asked Questions (FAQ)
            </h3>

            <div className="relative bg-white rounded-xl border border-zinc-200/80 overflow-hidden shadow-sm flex items-center px-4 py-1">
              <Search className="h-4 w-4 text-zinc-400 shrink-0" />
              <input
                type="text"
                value={faqSearch}
                onChange={(e) => setFaqSearch(e.target.value)}
                placeholder="Search queries e.g., 'price', 'laptop', 'Sheets'..."
                className="w-full text-zinc-850 text-xs sm:text-sm pl-2.5 outline-none font-sans py-3 bg-transparent font-medium"
              />
            </div>

            <div className="space-y-3">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq) => {
                  const isExpanded = expandedFaqId === faq.id;
                  return (
                    <div 
                      key={faq.id} 
                      className={`bg-white rounded-2xl border transition-all ${
                        isExpanded ? 'border-zinc-400 shadow-sm' : 'border-zinc-200'
                      }`}
                    >
                      <button
                        onClick={() => setExpandedFaqId(isExpanded ? null : faq.id)}
                        className="w-full flex items-center justify-between p-4.5 text-left outline-none cursor-pointer"
                      >
                        <span className="text-xs sm:text-sm font-bold text-zinc-900 leading-snug">
                          {faq.question}
                        </span>
                        <span className="bg-zinc-100 p-1.5 rounded-lg text-zinc-500 shrink-0 ml-4 transition-transform duration-200">
                          {isExpanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                        </span>
                      </button>

                      {isExpanded && (
                        <div className="px-5 pb-5 border-t border-zinc-100 pt-4 text-xs sm:text-sm text-zinc-650 leading-relaxed font-sans font-light bg-zinc-50/50 rounded-b-2xl">
                          <p>{faq.answer}</p>
                          <div className="mt-4 flex items-center gap-2">
                            <span className="text-[9px] font-mono bg-zinc-150 border border-zinc-220 px-2 py-0.5 rounded text-zinc-500 font-bold uppercase tracking-wider">
                              Topic: {faq.category}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="text-center bg-zinc-100 py-10 rounded-2xl text-zinc-500 flex flex-col items-center gap-2 border border-zinc-200">
                  <AlertCircle className="h-7 w-7 text-zinc-400" />
                  <p className="text-xs font-mono">No matching questions found.</p>
                </div>
              )}
            </div>

            {/* Quick alert bar */}
            <div className="bg-emerald-50/40 border border-emerald-100 text-emerald-950 p-5 rounded-2xl text-xs sm:text-sm leading-relaxed font-sans shrink-0 flex items-start gap-3 mt-6">
              <Sparkle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
              <p className="font-light text-zinc-700">
                <span className="font-bold text-zinc-900">Need specific help?</span> All registered attendees immediately gain 24/7 direct access to our core mentoring WhatsApp Channels for swift personal guidance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
