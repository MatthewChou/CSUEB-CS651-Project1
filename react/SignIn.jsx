import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageIntro from './components/PageIntro';

export default function SignIn() {
  return (
    <>
      <Navbar currentPage="Sign In" />
      <PageIntro eyebrow="Your PlatePal account" title="Welcome to the table.">
        <p className="lead mt-3">The sign-in interface will be built here with React components.</p>
        <div className="starter-note mt-4">
          <strong>Planned for a later coding step</strong>
          <p className="mb-0 mt-2">A login form and a Create Account form that appears beside it. React state will copy the new login and password into the original form.</p>
        </div>
        <p className="demo-note mt-3">Step 1: page foundation only. Account forms have not been implemented.</p>
      </PageIntro>
      <Footer />
    </>
  );
}
