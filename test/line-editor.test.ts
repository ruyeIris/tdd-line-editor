import {describe, expect, it} from "vitest";
import Konva from "konva";
import {LineEditor} from "../src/line-editor";

describe('Line editor', () => {

    it('should add anchor to line editor', function () {
        let line = new Konva.Line({points: [10, 10, 30, 30]});
        let editor = new LineEditor();
        editor.attach(line);

        expect(editor.findOne('.0-anchor').getAttrs()).toMatchObject({x: 10, y: 10});
        expect(editor.findOne('.1-anchor').getAttrs()).toMatchObject({x: 30, y: 30});
    });

    // TODO update anchor when line update
    it('should update anchor position when line update', () => {
        let line = new Konva.Line({points: [10, 10, 30, 30]})
        let editor = new LineEditor();
        editor.attach(line);

        line.points([40, 40, 60, 60]);

        expect(editor.findOne('.0-anchor').getAttrs()).toMatchObject({x: 40, y: 40});
        expect(editor.findOne('.1-anchor').getAttrs()).toMatchObject({x: 60, y: 60});
    });


    // TODO set control point on line editor
    // TODO update control point when line update
    // TODO change line points when dragging anchor
    // TODO add new anchor on editor when dragging control point
    // TODO remove anchor when double click anchor

})
