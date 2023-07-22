import React from "react";

const GroupsItems = ({
                          image,
                          name,
                      }) => {
    return (
        <div className="suggested-groups-item">
            <button>Join</button>
            <img src={image} alt="group"/>
            <div className="group-name">
                <p>{name}</p>
                <div className="group-info">
                    <p>Public</p>
                    <p>1 Member</p>
                </div>
            </div>

        </div>
    );
};

export default GroupsItems;