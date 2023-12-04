import AsyncStorage from "@react-native-async-storage/async-storage"
import { PLAYER_COLLECTION } from "@storage/storageConfig"
import { AppError } from "@utils/AppError"
import { PlayerStorageDTO } from "./PlayerStorageDTO"
import { playersGetByGroup } from "./playersGetByGroups"

export async function movAdd(newMov: PlayerStorageDTO, group: string) {
  try {
    const storedPlayers = await playersGetByGroup(group)

    const storage = JSON.stringify([...storedPlayers, newMov])

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)
  } catch (error) {
    throw error
  }
}
