'use client'
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { LogOut } from "lucide-react"
import { signOut } from "next-auth/react"

const LogoutButton = () => {

    const handlelogout = () => {
        signOut({ callbackUrl: "/admin/login" });
    }
    return (

        <DropdownMenuItem onClick={handlelogout} className="text-red-600">
            <LogOut className="mr-2 h-4 w-4" />
            Log out
        </DropdownMenuItem>

    )
}
export default LogoutButton