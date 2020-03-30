# Redmind front-end code assignment

## Task Description

You will be creating the UI for a minimalistic multiplayer battleships game using React and Typescript.

Clone and use this repository.

You may install and use any additional libraries you want.

Feel free to add interactions, animations, hover effects etc. but keep in mind the final outcome should look like similar to the design [Found here](https://www.figma.com/file/Ub8oaA72Q5A0lHgMxiDtmu/Redmind-Frontend-Test-Design?node-id=14%3A4).

The backend is already built using firebase and a GameEngine API is [provided to you](#GameEngine). In `App.tsx` you will find the basic usage is already implemented for creating / joining games.

Don't spend too much time completing the assignment but try to spend atleast 2 hours.
It's better (and totally fine) to deliver a small part that works and looks good rather than something with bugs that looks unfinished.

If you're having any issues getting started or general questions please contact us!

## Delivery

When you're finished make a pull request to this repository and let your contact at Redmind know.

## About Figma

If you're new to figma, this is what you need to know for this assignment:

- Click an element and select `Export` in the bottom right corner to download it a format of your choosing
- In the side navigation (on the left) under **Layers** you can switch between the different pages — **App Design** and **Design Library**

## GameEngine API

| Method        | Parameters    | Types            | Description                                                                                                |
| ------------- | ------------- | ---------------- | ---------------------------------------------------------------------------------------------------------- |
| create        | none          | none             | Creates the game in firebase                                                                               |
| join          | none          | none             | Joins the game in firebase                                                                                 |
| start         | none          | none             | Starts the game                                                                                            |
| end           | none          | none             | Ends the game                                                                                              |
| listen        | callback      | function         |  Calls the provided callback with the firebase state every time it is updated                              |
| stopListening | none          | none             | Detaches the listener                                                                                      |
| update        | update        | object           | Updates the provided properties, does not overwrite                                                        |
| fireAtDot     | [row, column] | [number, number] | Fires at the other players dot, updates status to either `BattleDotStatus.HIT` or `BattleDotStatus.MISSED` |
| endTurn       | none          | none             | ends your turn                                                                                             |

## Types

```typescript
type Board = [BoardRow, BoardRow, BoardRow]

type BoardRow = [BattleDot, BattleDot, BattleDot]

enum BattleDotStatus {
  PASSIVE,
  HIT,
  MISSED
}

type BattleDot = {
  status: BattleDotStatus
  active: boolean
}

type Player = {
  name: string
  board: Board
  id: string
  ready: boolean
  attempts: number
}

type GameState = {
  started: boolean
  gameOver: boolean
  owner: Player['id']
  players: {
    [key: string]: Player
  }
  currentTurn: Player['id']
}

type GameProps = {
  gameId: string
  player: Player
}

```