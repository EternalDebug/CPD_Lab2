class MiniMaple{
    constructor() {
        
    }

    Diff(fun, vari) {
        if (fun.indexOf(vari) === -1) {
            return 0
        }


        if (fun.indexOf('+') != -1) {
            return this.DiffP(fun, vari)
        } else
        if (fun.indexOf('-') != -1) {
            return this.DiffM(fun, vari)
        } else
        if (fun.indexOf('*') != -1) {
            return this.DiffMlt(fun, vari)
        } else
        if (fun.indexOf('^') != -1) {
            return this.DiffPow(fun, vari, 1)
        } else 
        {
            return "1"
        }

    }

    DiffP(fun, vari) {
        let thing = fun.split('+')
        let things = []
        for (let i = 0; i < thing.length; i++) {
            if (isNaN(thing[i])) {
                things.push(thing[i])
            }
        }


        if (things.length === 1) {
            if (things[0].indexOf('-') != -1) {
                return "" + this.DiffM(things[0], vari)
            }
            else {
                return "" + this.DiffMlt(things[0], vari)
            }

        }
        
            let res = ""
            for (let i = 0; i < things.length - 1; i++) {
                let subr
                if (things[i].indexOf('-') != -1) {
                    subr = this.DiffM(things[i], vari)
                } else {
                    subr = this.DiffMlt(things[i], vari)
                }
                res = res + subr + '+'
            }
            let subr
            if (things[things.length - 1].indexOf('-') != -1) {
                subr = this.DiffM(things[things.length - 1], vari)
            } else {
                subr = this.DiffMlt(things[things.length - 1], vari)
            }
            res = res + subr
            return res
        
    }

    DiffM(fun, vari) {
        let thing = fun.split('-')
        let things = []
        for (let i = 0; i < thing.length; i++) {
            if (isNaN(thing[i])) {
                things.push(thing[i])
            }
        }

        if (things.length === 1) {
            return "" + this.DiffMlt(things[0], vari)
        }
        let res = '' + this.DiffMlt(things[0], vari) + '-'
        for (let i = 1; i < things.length - 1; i++) {
            res = res + this.DiffMlt(things[i], vari) + '-'
        }
        res = res + this.DiffMlt(things[things.length - 1], vari)
        return res;
        
    }

    DiffMlt(fun, vari) {
        if (fun.indexOf(vari) === -1) {
            return "" + 0
        }
        let things = fun.split('*')
        if (things.length === 1) {
            if (things[0].indexOf('^') != -1) {
                return "" + this.DiffPow(things[0], vari, 1)
            } else {
                return "" + 1
            }
        }
        let mlt = parseInt(things[0])
        if (things[1].indexOf('^') != -1) {
            return "" +this.DiffPow(things[1], vari, mlt)
        } else {
            return "" + things[0]
        }
    }

    DiffPow(fun, vari, mult = 1) {
        let res = ""
        if (fun.indexOf(vari) === -1) {
            res += 0
            return res
        }
        let things = fun.split('^')
        let pow = parseInt(things[1])
        let mlt = mult * pow
        pow = pow - 1
        if (pow < 0) {
            res += 0
            return res
        }
        if (pow === 0) {
            res += mlt
            return res
        }
        if (pow === 1) {
            res += mlt + "*" + vari
            return res
        }
        res += mlt + "*" + vari + "^" + pow
        return res
    }
}

export {MiniMaple}