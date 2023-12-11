import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe('Async Component', () => {
    test('renders post if the request succeeds', async () => {              //we need to add await on findAllBy because getAllByRole as data is coming little bit late and find method will wait or data by default it will wait for 1 sec and then return whether it was able to fetch the data or not
        
        //mock function
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async() => [{id: 'p1', title: 'First Post'}],  //overrinding the built in fetch function with dummy function
        })
        render (<Async/>)

        const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0);
    })
})