import { WorldConfig } from "@shared/types/others";

const TIME_SCALE = 0.5; // 2x faster timeline
const SPEED_MULTIPLIER = 1 / TIME_SCALE;
const scaleTime = (value: number) => value * TIME_SCALE;
const scaleRate = (value: number) => value * SPEED_MULTIPLIER;

export const world: WorldConfig = {
    transport: 500, // Transport capacity of merchant ships
    load_speed: scaleRate(500), // Load per port level (accelerated)
    load_speed_base: scaleRate(500), // Base load of the port (accelerated)
    load_attack_return: scaleTime(5), // Time it takes to load resources from a raid
    load_defend_return: scaleTime(5), // Time it takes to load troops returning from a defense
    time_scale: TIME_SCALE, // Global time multiplier (lower is faster)
    bonus: { // Modifiers for resource speed, etc.
      resources: 10,
      tavern: 10,
      tavern_consume: 10,
    },
    warehouse: {
      resource_protected: 400, // Resources protected per warehouse level
      resource_protected_base: 100, // Base resource protection capacity
      capacity: 8000, // Storage capacity per level
      capacity_base: 2500, // Base storage capacity
    },
    distance: {
      same_island: scaleTime(750)//seconds
    },
    combat: {
      wall_bonus: 0.01, // Wall bonus per level, 0.01 is 1%
    },
    colonize: {
      wood: 1250,
      gold: 9000,
      population: 40,
    },
    messages: {
      cant: 5, // Maximum number of messages
      time: scaleTime(300), // Time in seconds
    },
  };