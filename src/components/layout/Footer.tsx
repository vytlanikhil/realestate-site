const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* English Details */}
          <div className="text-slate-300 space-y-4 glass-panel p-8 rounded-xl border-t-2 border-t-gold/40">
            <h3 className="text-2xl font-heading text-gold mb-6">Complete ORR Project Details (Latest Update 2026)</h3>
            
            <div>
              <strong className="text-slate-50 uppercase text-xs tracking-wider">Main Objective:</strong>
              <p className="text-sm mt-1 leading-relaxed">To reduce traffic congestion in Rajahmundry city, bypass NH-16 traffic, and complete the project before the 2027 Godavari Pushkaralu.</p>
            </div>
            
            <div>
              <strong className="text-slate-50 uppercase text-xs tracking-wider">Length:</strong>
              <p className="text-sm mt-1 leading-relaxed">Approximately 35 km (Some sources mention the full corridor could extend up to 189 km – covering both east and west sides).</p>
            </div>
            
            <div>
              <strong className="text-slate-50 uppercase text-xs tracking-wider">Road Specification:</strong>
              <p className="text-sm mt-1 leading-relaxed">6 lanes + 2 service lanes, 60-meter width, access-controlled expressway.</p>
            </div>
            
            <div>
              <strong className="text-slate-50 uppercase text-xs tracking-wider">Budget:</strong>
              <p className="text-sm mt-1 leading-relaxed">Around ₹7,000 crores.</p>
            </div>
            
            <div>
              <strong className="text-slate-50 uppercase text-xs tracking-wider">Project Stage:</strong>
              <p className="text-sm mt-1 leading-relaxed">DPR (Detailed Project Report) preparation and land acquisition are in progress. Reviewed by Minister Ponguru Narayana.</p>
            </div>
            
            <div>
              <strong className="text-slate-50 uppercase text-xs tracking-wider">Public Preferred Full Alignment:</strong>
              <p className="text-sm mt-1 font-mono text-gold/90 leading-relaxed bg-black/20 p-3 rounded mt-2">Bobbillanka → Mirthipadu → Bucchampeta → Behind Airport → Burugupudi → Rajanagaram → Pallakadiyam → Kanavaram → Srikrishnapatnam → Punyakshetram → Namavaram → Rajavolu → Kadiyam → Kadiyapulanka</p>
            </div>
          </div>

          {/* Telugu Details */}
          <div className="text-slate-300 space-y-4 glass-panel p-8 rounded-xl border-t-2 border-t-orange-warm/40">
            <h3 className="text-2xl font-heading text-orange-warm mb-6">పూర్తి ORR ప్రాజెక్ట్ డీటెయిల్స్ (2026 లేటెస్ట్ అప్డేట్)</h3>
            
            <div>
              <strong className="text-slate-50 uppercase text-xs tracking-wider">ప్రధాన ఉద్దేశం:</strong>
              <p className="text-sm mt-1 leading-relaxed">రాజమండ్రి సిటీ ట్రాఫిక్ తగ్గించడం, NH-16 ట్రాఫిక్ను బైపాస్ చేయడం, 2027 గోదావరి పుష్కరాలకు ముందు పూర్తి చేయడం.</p>
            </div>
            
            <div>
              <strong className="text-slate-50 uppercase text-xs tracking-wider">లెంగ్త్:</strong>
              <p className="text-sm mt-1 leading-relaxed">సుమారు 35 కి.మీ (కొన్ని సోర్సెస్లో ఫుల్ కారిడార్ 189 కి.మీ వరకు చెప్పబడింది – ఈస్ట్ + వెస్ట్ సైడ్).</p>
            </div>
            
            <div>
              <strong className="text-slate-50 uppercase text-xs tracking-wider">రోడ్ స్పెసిఫికేషన్:</strong>
              <p className="text-sm mt-1 leading-relaxed">6 లేన్ + 2 (60 మీటర్ల వెడల్పు), యాక్సెస్ కంట్రోల్డ్ ఎక్స్ప్రెస్వే.</p>
            </div>
            
            <div>
              <strong className="text-slate-50 uppercase text-xs tracking-wider">బడ్జెట్:</strong>
              <p className="text-sm mt-1 leading-relaxed">సుమారు ₹7,000 కోట్లు.</p>
            </div>
            
            <div>
              <strong className="text-slate-50 uppercase text-xs tracking-wider">ప్లాన్ స్టేజ్:</strong>
              <p className="text-sm mt-1 leading-relaxed">DPR (డీటైల్డ్ ప్రాజెక్ట్ రిపోర్ట్) + ల్యాండ్ అక్విజిషన్ జరుగుతోంది. మినిస్టర్ పొంగూరు నారాయణ రివ్యూ చేశారు.</p>
            </div>
            
            <div>
              <strong className="text-slate-50 uppercase text-xs tracking-wider">పబ్లిక్ ప్రిఫర్డ్ ఫుల్ అలైన్మెంట్:</strong>
              <p className="text-sm mt-1 font-mono text-orange-warm/90 leading-relaxed bg-black/20 p-3 rounded mt-2">బొబ్బిల్లంక → మిర్తిపాడు → బుచ్చెంపేట → ఎయిర్పోర్ట్ బ్యాక్ సైడ్ → బూరుగుపూడి → రాజానగరం → పల్లకడియం → కానవరం → శ్రీకృష్ణపట్నం → పుణ్యక్షేత్రం → నామవరం → రాజవోలు → కడియం → కడియపులంక</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Real Estates. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-xs text-slate-500">
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
