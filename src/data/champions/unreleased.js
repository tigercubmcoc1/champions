import { CHAMPION } from '../model/Champion';

export const UNRELEASED_CHAMPIONS = [
    // Cosmic
    CHAMPION.DARKPHOENIX,
    // Tech
    // Mutant
    CHAMPION.WEAPONX,
    // Skill
    // Science
    CHAMPION.MRFANTASTIC,
    CHAMPION.INVISIBLEWOMAN,
    // Mystic
    // Universal
    CHAMPION.MAESTRO,
    CHAMPION.THECOLLECTOR,
].reduce((map, champion) => {
    map[ champion ] = true;
    return map;
}, {});
