import {create, ReactTestInstance} from "react-test-renderer";
import {ProfileStatus} from "./ProfileStatus";

describe('ProfileStatus component', () => {
    test('status from props should be in state', () => {
        const component = create(<ProfileStatus
            updateStatus={() => {
            }} status={'test'}/>)
        const instance = component.getInstance()
        expect(instance?.props.status).toBe('test')
    })

    test('after creation <span> should be displayed', () => {
        const component = create(<ProfileStatus
            updateStatus={() => {
            }} status={'test'}/>)
        const root = component.root
        let span = root.findByType('span')
        expect(span).not.toBeNull()
    })

    test("after creation span shoud contains correct status", () => {
        const component = create(<ProfileStatus status='Hello' updateStatus={() => {
        }}/>,);
        const root = component.root;
        if (root) {
            let span = root.findByType('span');
            expect(span.children[0]).toEqual('Hello');
        }
    });

    test("after creation <input> shouldn't be displayed", () => {
        const component = create(<ProfileStatus status='Hello' updateStatus={() => {
        }}/>,);
        const root = component.root;
        if (root) {
            expect(() => {
                let input = root.findByType('input');
            }).toThrow();
        }
    });


//нашел спан, кликнул, спан исчез, появился инпут в котором 'Test'
    test("after  click on span input should be displayed", () => {
        const component = create(<ProfileStatus status='Test' updateStatus={() => {
        }}/>,);
        const root = component.root;
        if (root) {
            let span = root.findByType('span');
            span.props.onDoubleClick();
            let input = root.findByType('input');
            expect(input).not.toBeNull();
            expect(input.props.value).toBe('Test');
        }

    });
//
    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status='Test ' updateStatus={mockCallback}/>,);
        const instance = component.getInstance() as (ReactTestInstance & { deActiveMode: () => void } | null);
        if (instance) {
            instance.deActiveMode();
            expect(mockCallback.mock.calls.length).toBe(1);
        }
    });
})