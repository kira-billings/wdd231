
import { buildSpotlightCards } from './spotlightCards.mjs';

const url = 'data/spotlights.json';

async function getItemData() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        return data;
    } catch (error) {
        console.error("Error loading spotlight data:", error);
    }
}

async function showGrid() {
    const items = await getItemData();

    console.log(items);

    if (items) {
        buildSpotlightCards(items);
    }
}

showGrid();


