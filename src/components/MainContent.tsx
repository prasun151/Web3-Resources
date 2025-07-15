const MainContent = () => {
  return (
    <div className="max-w-4xl mx-auto px-8 py-16">
      <div className="text-right mb-16">
        <h1 className="text-7xl font-eb-garamond text-foreground mb-2">himanshu</h1>
        <p className="text-xl text-foreground">
          cooking in da lab with <a href="#" className="text-accent hover:underline">@bhindi</a>
        </p>
      </div>

      <div className="mb-16">
        <p className="text-foreground text-lg leading-relaxed">
          nice to meet you!! i'm himanshu, just passed out my engineering course in IT. this is my little corner of the internet :)
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-4xl font-eb-garamond text-foreground mb-8">a little bit about me:</h2>
        <ul className="space-y-6 text-foreground text-lg leading-relaxed">
          <li>
            learning, building and iterating at the intersection of ai and real-world challenges. we're building your cursor for apps. (visit{' '}
            <a href="#" className="text-accent hover:underline">bhindi.io</a>)
          </li>
          <li>
            [14-10-2024] i've worked as a Machine Learning Intern at a US-based startup (remotely). the org is building an end-to-end autonomous AI agent platform for hiring automation, data enrichment, and document processing. i've contributed on building backend pipelines, browsing agents, and applicatioon layer using LMs.
          </li>
          <li>
            [01-06-2024] previously I worked as a Research Intern at{' '}
            <a href="#" className="text-accent hover:underline">Trust Lab, IIT Bombay</a> where i'd collaborated on a project entitled{' '}
            <span className="font-semibold">'Domain Knowledge based Q/A for LLMs'</span>, optimizing and fine-tuning LLMs for open-ended medical question answering. I've been building an execution pipeline incorporating DSPy (python framework by stanfordnlp) in this project.
          </li>
          <li>
            [15-8-2024] additionally, i've collaborated with <span className="font-semibold">Cupric</span> as a{' '}
            <span className="font-semibold">Software Engineer (AI/ML)</span> where i've been building a follow-up care tool for the medical domain. my work revolves around building ML backend pipelines. (visit{' '}
            <a href="#" className="text-accent hover:underline">cupric.tech</a>)
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-4xl font-eb-garamond text-foreground mb-8">some fun facts about me:</h2>
        <ul className="space-y-6 text-foreground text-lg leading-relaxed">
          <li>
            i love those <span className="font-semibold italic">architectures!</span> i'm usually fascinated by how things work under the hood. the underlying maths, how to make intuitions
          </li>
          <li>
            i passionately write and publish blogs around ml, dl, cv, and nlp. my focus always has been to write as intuitive as possible keeping the flow interesting. it can be the case many times i will bore explaining the mathematics behind those approaches and architectures. (believe me, those are lovely!)
          </li>
          <li>
            exploring, ideating, and building AI agents.
          </li>
          <li>
            lowkey geopolitics excites me.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainContent;