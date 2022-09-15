export default interface GameDetails{
    id? : number,
    id_competition : Object,
    team_home : Object,
    team_home_rating : number,
    team_away : number,
    team_away_rating : number,
    broadcast_time : string,
    broadcast_day : string
}