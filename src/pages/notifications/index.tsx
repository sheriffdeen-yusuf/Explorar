import React from "react";
import TopNavigation from "@/components/TopNavigation";
import NotificationBox from "@/components/NotificationBox";

function Notifications() {
    return (
        <div>
            <TopNavigation />
            <section className="text-center mx-20">
                <p className="font-bold text-2xl ">Notifications</p>
                <NotificationBox />
                <NotificationBox />
                <button className="btn-save">Clear all</button>
            </section>
        </div>
    )
}

export default Notifications;