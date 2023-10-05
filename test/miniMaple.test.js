import {MiniMaple} from "../src/miniMaple";


test('diff +', () => {
    let MM = new MiniMaple()
    let fun = 'x^2+x+1'
    let variable = 'x'

    let result = MM.Diff(fun, variable)
    expect(result).toBe('2*x+1');

    fun = 'x^2+'

    result = MM.Diff(fun, variable)
    expect(result).toBe('2*x');

    fun = 'x^2-x+'

    result = MM.Diff(fun, variable)
    expect(result).toBe('2*x-1');

    fun = 'x^2+x-1'

    result = MM.Diff(fun, variable)
    expect(result).toBe('2*x+1');

    fun = '3*x^3-x^2+x-1'

    result = MM.Diff(fun, variable)
    expect(result).toBe('9*x^2-2*x+1');

    fun = 'x^4+x^3+x^2+x+1'

    result = MM.DiffP(fun, variable)
    expect(result).toBe('4*x^3+3*x^2+2*x+1');
})

test('diff -', () => {
    let MM = new MiniMaple()
    let fun = 'x^2-x-1'
    let variable = 'x'

    let result = MM.Diff(fun, variable)
    expect(result).toBe('2*x-1');

    fun = 'x^3-x^2-x-1'
    result = MM.Diff(fun, variable)
    expect(result).toBe('3*x^2-2*x-1');
})

test('diff *', () => {
    let MM = new MiniMaple()
    let fun = '2*x^2+x'
    let variable = 'x'

    let result = MM.Diff(fun, variable)
    expect(result).toBe('4*x+1');

    fun = '2*x'
    variable = 'x'

    result = MM.Diff(fun, variable)
    expect(result).toBe('2');
})

test('diff ^', () => {
    let MM = new MiniMaple()
    let fun = 'x^2+x'
    let variable = 'x'

    let result = MM.Diff(fun, variable)
    expect(result).toBe('2*x+1');

    fun = 'x^2'
    variable = 'x'

    result = MM.Diff(fun, variable)
    expect(result).toBe('2*x');
})

test('diff ^0', () => {
    let MM = new MiniMaple()
    let fun = 'x'
    let variable = 'x'

    let result = MM.Diff(fun, variable)
    expect(result).toBe('1');
})

test('diff y', () => {
    let MM = new MiniMaple()
    let fun = 'x^2+x+1'
    let variable = 'y'

    let result = MM.Diff(fun, variable)
    expect(result).toBe(0);
})

test('diff pow', () => {
    let MM = new MiniMaple()
    let fun = 'x^2'
    let variable = 'x'

    let result = MM.DiffPow(fun, variable, 4)
    expect(result).toBe('8*x');

    fun = '4*x^3'
    variable = 'y'
    result = MM.DiffPow(fun, variable)
    expect(result).toBe('0');

    fun = 'x^0'
    variable = 'x'
    result = MM.DiffPow(fun, variable)
    expect(result).toBe('0');

    fun = 'x^1'
    variable = 'x'
    result = MM.DiffPow(fun, variable)
    expect(result).toBe('1');
})

test('diff mlt', () => {
    let MM = new MiniMaple()
    let fun = '4*x'
    let variable = 'x'

    let result = MM.DiffMlt(fun, variable)
    expect(result).toBe('4');

    fun = '4*x^3'
    result = MM.DiffMlt(fun, variable)
    expect(result).toBe('12*x^2');

    fun = '4*x^3'
    variable = 'y'
    result = MM.DiffMlt(fun, variable)
    expect(result).toBe('0');
})