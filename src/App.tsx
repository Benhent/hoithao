import { Routes, Route } from "react-router-dom";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import SigninForm from "./_auth/forms/SigninForm";
import SignupForm from "./_auth/forms/SignupForm";
import {Home} from "./_root/Pages";
import './globals.css';

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public route */}
        <Route element={<AuthLayout/>}>
          <Route path="/Sign-in" element={<SigninForm/>}/>
          <Route path="/Sign-up" element={<SignupForm/>}/>
        </Route>

        {/* private route */}
        <Route element={<RootLayout/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </main>
  )
}

export default App