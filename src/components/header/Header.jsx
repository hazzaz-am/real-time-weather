import Modal from "./Modal";
import SearchLocation from "./SearchLocation";
import FavoriteLocations from "./FavoriteLocations";
import Logo from "./Logo";
import { useState } from "react";

export default function Header() {
  const [isFavModalOpen, setIsFavModalOpen] = useState(false)
  return (
    <header className="fixed left-0 w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
      <nav className="container mx-auto flex items-center justify-between py-6">
        <Logo />

        <div className="flex items-center gap-4 relative">
          <SearchLocation />
          <FavoriteLocations onShow={() => setIsFavModalOpen(!isFavModalOpen)} />
          {
            isFavModalOpen && (
              <Modal />
            )
          }
        </div>
      </nav>
    </header>
  );
}