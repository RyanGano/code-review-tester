import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import SignInButton from "./components/SignInButton";
import SignOutButton from "./components/SignOutButton";
import ProfileData from "./components/ProfileData";
import './App.css'

function App() {
  const { accounts } = useMsal();

  return (
    <>
      <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <h1>Code Review Tester</h1>
        <p>An AI-assisted tool for improving code review skills</p>
        
        <AuthenticatedTemplate>
          <div style={{ marginBottom: '20px' }}>
            <h2>Welcome, {accounts[0]?.name || 'User'}!</h2>
            <p>You are successfully authenticated and can now access the application.</p>
            <SignOutButton />
          </div>
          <ProfileData />
        </AuthenticatedTemplate>
        
        <UnauthenticatedTemplate>
          <div style={{ marginBottom: '20px', padding: '20px', border: '2px solid #ffa500', borderRadius: '8px', backgroundColor: '#fff3cd' }}>
            <h2>Authentication Required</h2>
            <p>You must sign in to access this application. Please authenticate using your Microsoft account.</p>
            <SignInButton />
          </div>
        </UnauthenticatedTemplate>
      </div>
    </>
  )
}

export default App
