interface AuthModalProps { 
  setIsAuthenticated: (auth: boolean) => void;
}

function AuthModal({ setIsAuthenticated }: AuthModalProps) {
  return <div> Auth Modal </div>;
}

export default AuthModal;
