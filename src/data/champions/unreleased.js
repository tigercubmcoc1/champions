import { CHAMPION } from '../model/Champion';

export const UNRELEASED_CHAMPIONS = [
    // Cosmic
    CHAMPION.DARKPHOENIX,
    // Tech
    CHAMPION.GUARDIAN,
    // Mutant
    CHAMPION.PLATINUMPOOL,
    // Skill
    // Science
    // Mystic
    CHAMPION.SASQUATCH,
    // Universal
    CHAMPION.MAESTRO,
    CHAMPION.THECOLLECTOR,
    CHAMPION.GRANDMASTER,
].reduce((map, champion) => {
    map[ champion ] = true;
    return map;
}, {});
