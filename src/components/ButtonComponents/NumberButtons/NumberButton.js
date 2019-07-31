import React from "react";

export const NumberButton = number => {
    if (number === "0") {
        return (
            <button class="zero-button">
                {number}
            </button>
        )
    } else {
        return (
            <button class="number-button">
                {number}
            </button>
        )
    }
};

