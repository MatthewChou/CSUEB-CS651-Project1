import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageIntro from './components/PageIntro';

export default function App() {
  return (
    <>
      <Navbar currentPage="App" />
      <PageIntro eyebrow="The PlatePal workspace" title="Meet your meal companion.">
        <p className="lead mt-3">Start with a meal photo. PlatePal's planned features will identify foods, suggest additions, and show estimated progress toward your daily calorie goal.</p>
        <div className="starter-note mt-4">
          <strong>Coming in our next coding step</strong>
          <p className="mb-0 mt-2">Choose a photo, see a preview, and display sample food results and meal suggestions using React state.</p>
        </div>
        <p className="demo-note mt-3">Step 1: page foundation only. Analysis and calorie tracking are planned features. Project 1 will use sample results; Project 2 will connect Gemini through a backend.</p>
      </PageIntro>
      <Footer />
    </>
  );
}
