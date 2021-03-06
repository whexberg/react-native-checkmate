const shell = require('shelljs');
const cwd = process.cwd().concat('/');

// Podfile.lock and Pods/Manifest.lock should match exactly
function iosPodCheck() {
  const iosDir = cwd.concat('ios');
  const podfileLockPath = iosDir.concat('/Podfile.lock');
  const manifestLockPath = iosDir.concat('/Pods/Manifest.lock');
  const podSyncStatus = shell.exec(`diff ${podfileLockPath} ${manifestLockPath} > /dev/null`).code;

  return podSyncStatus ? false : true;
}

module.exports = {
  iosPodCheck: iosPodCheck
};
