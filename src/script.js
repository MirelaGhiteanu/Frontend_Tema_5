class Cipher {
    constructor(key = 123) {
        this.key = key;
        this.store = new Map();
        this.log = [];
    }

    async encode(code) {

        let encoded = '';

            code.split('').forEach(character => {
            let charact = character.charCodeAt() * this.key;
            encoded = encoded + '+' + charact;
            });
            this.store.set(code, encoded);
            this.log.push(`${new Date().toLocaleString()}: "${code}" encoded as "${encoded}"`);

        return encoded;


    }

    async decode(code){

        var decoded = '';

        if (this.store.has(code)){
            decoded = this.store.get(code);
        }
        else{
                var decodeChar = code.split('/');
                decodeChar.forEach(word => {
                decoded = decoded + String.fromCharCode(word/this.key);
                  });

        }
       this.log.push(`${new Date().toLocaleString()}: "${code}" decoded as "${decoded}"`);
      
        return decoded;

    }

    readLog() {
        this.log.forEach(string => {
            console.log(string);
        });
    }

}


(async () => {
    const ci = new Cipher(20);
    msg = await ci.encode('DevSchool');
    console.log(msg);
    console.log(await ci.decode(msg));
    console.log(ci.readLog());

})();






