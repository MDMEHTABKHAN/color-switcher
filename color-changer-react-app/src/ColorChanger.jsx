import { useState } from "react";

export default function Changer() {
    const [color, setColor] = useState("DeepPink");

    const colors = [
        { name: "Tomato", hex: "#FF6347" },
        { name: "SteelBlue", hex: "#4682B4" },
        { name: "Chocolate", hex: "#D2691E" },
        { name: "Goldenrod", hex: "#DAA520" },
        { name: "Firebrick", hex: "#B22222" },
        { name: "Aquamarine", hex: "#7FFFD4" },
        { name: "CadetBlue", hex: "#5F9EA0" },
        { name: "Plum", hex: "#DDA0DD" },
        { name: "LightSlateGray", hex: "#778899" },
        { name: "YellowGreen", hex: "#9ACD32" },
        { name: "OrangeRed", hex: "#FF4500" },
        { name: "SeaGreen", hex: "#2E8B57" },
        { name: "SlateBlue", hex: "#6A5ACD" },
        { name: "DeepPink", hex: "#FF1493" },
        { name: "DarkTurquoise", hex: "#00CED1" }
    ];

    return (
        <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
            <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
                <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-4xl">
                    {colors.map((col) => (
                        <button
                            key={col.name}
                            onClick={() => setColor(col.hex)}
                            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                            style={{ backgroundColor: col.hex }}
                        >
                            {col.name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
