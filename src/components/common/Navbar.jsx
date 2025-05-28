import React, { useState } from "react";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
// import axios from "axios"; // Not used, as requested: static data only

export const Navbar = () => {
  const navigate = useNavigate();
  // SIMULATED "user" static data for fake login
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [openDialog, setOpenDialog] = useState(false);

  // Simulate google login (no API call)
  const handleLogin = () => {
    // Fake user data
    const fakeUser = {
      name: "Harlow Stockert",
      picture: "https://randomuser.me/api/portraits/men/32.jpg",
      email: "harlow@example.com",
    };
    localStorage.setItem("user", JSON.stringify(fakeUser));
    setUser(fakeUser);
    setOpenDialog(false);
  };

  // Simulate google logout
  const handleLogout = () => {
    googleLogout();
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <div className="p-3 shadow-sm flex justify-between items-center px-5">
      <Link to={"/"}>
        <img src="/mainlogo-old.png" className="w-28 md:w-40" alt="EasyTrip logo" />
      </Link>
      <div>
        {user ? (
          <div className="flex justify-center items-center gap-1 md:gap-3">
            <Link to={"/create-trip"}>
              <Button variant="outline" className="rounded-full">
                Create Trips
              </Button>
            </Link>
            <Link to={"/my-trips"}>
              <Button variant="outline" className="rounded-full">
                My Trips
              </Button>
            </Link>
            <Popover>
              <PopoverTrigger>
                <img
                  src={user?.picture}
                  className="rounded-full h-[35px] w-[35px]"
                  alt="profile"
                />
              </PopoverTrigger>
              <PopoverContent className="w-48 hover:bg-gray-100 cursor-pointer">
                <h2 onClick={handleLogout}>Logout</h2>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogTrigger asChild>
              <Button onClick={() => setOpenDialog(true)}>Sign In</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogDescription>
                  <img src="/mainlogo-old.png" className="w-28 md:w-40" alt="logo" />
                  <h2 className="font-bold text-lg mt-7">
                    Sign In with Google
                  </h2>
                  <p>Sign In to the App with Google authentication</p>
                  <Button
                    className="w-full mt-5 flex items-center gap-2"
                    onClick={handleLogin}
                  >
                    <FcGoogle className="h-5 w-5" /> Sign In with Google
                  </Button>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
};