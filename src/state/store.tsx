import { configureStore } from '@reduxjs/toolkit'
import RoomSlice from 'pages/rooms/RoomSlice'

export const store = configureStore({
  reducer: {
    roomsState: RoomSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
