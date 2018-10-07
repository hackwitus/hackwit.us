import React, { Component } from "react";
import cdn from "@widgetbot/crate/dist/util/cdn";

async function init() {
    const Crate = await cdn();

    const myCrate = new Crate({
        server: "497565774689468424", // Server id
        channel: "497566160456253492", // Default join channel -- Set to announcements
        shard: "https://cl2.widgetbot.io" // WidgetBot cluster -- Currently using Cluster 2 as it is most reliable
    });
}

init();

const Widget = () => {
    return null;
};

export default Widget;