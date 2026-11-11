import MenuIcon from "@mui/icons-material/Menu";
import Modal from "../../features/modal/Modal";

export default function MobileMenu() {
  return (
    <div className="md:hidden flex h-full p-1 bg-foreground border-t-2 border-divider cursor-pointer rounded-sm">
      <Modal
        trigger={<MenuIcon fontSize="small" className="text-current/50" />}
        blurBackground
      >
        <div className="fixed top-0 right-0 w-screen max-w-70 bg-foreground border-t-2 border-divider h-screen">
          test
        </div>
      </Modal>
    </div>
  );
}
