import "@testing-library/jest-dom";
import { render, screen } from "./__test__/test-utils";
import Home from "./page";
import { act } from "react-dom/test-utils";
import { fetchText } from "../features/text";

describe("Home Page", () => {
    test("Renders Home page", async () => {
        // const dispatch = useDispatch<AppDispatch>();
        // const [componentTextValue, setComponentTextValue] = useState("");
        await act(() => {
            render(<Home />);
            fetchText();
        });

        const main = screen.getByRole("main");
        expect(main).toBeInTheDocument();
    });
});
