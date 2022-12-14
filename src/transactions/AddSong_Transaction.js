import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * MoveSong_Transaction
 * 
 * This class represents a transaction that works with drag
 * and drop. It will be managed by the transaction stack.
 * 
 * @author McKilla Gorilla
 * @author ?
 */
export default class AddSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, initNewSongIndex) {
        super();
        this.app = initApp;
        this.newSongIndex = initNewSongIndex;
    }

    doTransaction() {
        this.app.addSong(this.newSongIndex);
    }
    
    undoTransaction() {
        this.app.deleteSongConfirm(this.newSongIndex);
    }
}