export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-slate-900 text-white font-sans">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          I'm Samuel Agudelo
        </h1>
        <p className="text-2xl text-slate-300 mb-6">
          Backend Developer | AI Automation Specialist
        </p>
        <p className="text-lg text-slate-400 leading-relaxed mb-8">
          I build scalable, high-performance web applications with a focus on robust Backend architectures. 
          Currently mastering TypeScript and Cloud Infrastructure to solve complex business problems at scale.
        </p>
        <div className="flex justify-center gap-4">
          <span className="px-4 py-2 bg-blue-600 rounded-full text-sm font-semibold">Node.js</span>
          <span className="px-4 py-2 bg-emerald-600 rounded-full text-sm font-semibold">React</span>
          <span className="px-4 py-2 bg-purple-600 rounded-full text-sm font-semibold">AI Automation</span>
        </div>
      </div>
    </main>
  );
}