// src/types.ts
export interface PlayerDetails {
    player_name: string;
    position: string;
    team: string;
    goals: number;
}

export interface DataTableProps {
    data: {
      [playerId: string]: PlayerDetails;
    };
  }