import * as FileSystem from 'expo-file-system';

const FILENAME = 'resource.json';
const SERVER_URL = 'http://portal.greenmilesoftware.com/get_resources_since';

const RES_DIR = FileSystem.documentDirectory + 'resource/';
const FILE_URI = RES_DIR + FILENAME;

// Checks if directory exists. If not, creates it
async function ensureDirExists() {
  const dirInfo = await FileSystem.getInfoAsync(RES_DIR);
  if (!dirInfo.exists) {
    console.log("Resource directory doesn't exist, creating...");
    await FileSystem.makeDirectoryAsync(RES_DIR, { intermediates: true });
  }
}

// Returns URI to our local file
// If our file doesn't exist locally, it downloads it
export async function getResources() {
  await ensureDirExists();

  const fileInfo = await FileSystem.getInfoAsync(FILE_URI);

  if (!fileInfo.exists) {
    console.log("Resource isn't cached locally. Downloading...");
    await FileSystem.downloadAsync(SERVER_URL, FILE_URI);
  }

  return FILE_URI;
}
