import { render, screen, waitFor } from "./__test__/test-utils";
import Home from "./page";
import { act } from "react-dom/test-utils";
import { fetchText } from "../features/text";

describe("Home Page", () => {
    test("Renders Home page", async () => {
        // const dispatch = useDispatch<AppDispatch>();
        // const [componentTextValue, setComponentTextValue] = useState("");
        render(<Home />);

        await act(() => {
            fetchText();
        });

        const main = screen.getByRole("main");
        expect(main).toBeInTheDocument();
        waitFor(() => {
            const loader = screen.getByTestId("loader");
            expect(loader).toBeInTheDocument();
        });
    });
});
