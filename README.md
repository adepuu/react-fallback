## Getting Started on Making Context

make sure you already have a *goal/purpose* in mind

1. Make a `context` folder

2. make a context file with `[goal]Context.ts` naming, where `[goal]` should be replaced by your goal/purpose for that context; Eg: making a context for menu, it should be named as `MenuContext.ts`

3. make the context itself. If you make a context for Menu like above, do it like this: `const MenuContext = createContext();`

4. make a proper value/data type for the context. make an interface based on the data that will be returned. Eg 
```
interface  MenuContextType {
	menuShowing:  boolean;
	setShowing: () =>  void;
}
```

and update the `MenuContext` using that `MenuContextType` interface so it become like this `const  MenuContext  =  createContext<MenuContextType>(defaultValue);` where the `defaultValue` should be adjusted accordingly based on the requirement.

5. export the context using `default` export
6. make a file for the provider named `[goal]Provider.tsx`. Use `.tsx` because we will return JSX element. Eg: `MenuProvider.tsx`
7. make a react functional component with `children` using `JSX.Element  |  ReactNode` as its type.
8. Decide what's solution using either  `useState` or `useEffect` inside the functional component.
9. Return the `Context.Provider` component like below
```
return (
	<MenuContext.Provider
	  value={{ 
	    menuShowing:  menuShowing, 
	    setShowing:  handleToggleMenu 
	  }}
	>
	 {children}
	</MenuContext.Provider>
);
``` 
where the `value` should be adjusted based on the `interface` that was used on  `createContext` line on the `MenuContext.ts`

10.  Wrap the whole app that was intended to use the context inside a `Provider`
```
<MenuProvider>
	<App />
</MenuProvider
```

11. Use the context using `useContext()`, Eg: if u want to use `MenuContext`, import the `MenuContext` and then use it inside `useContext()` such as:
```
import  MenuContext  from  "@/context/MenuContext";
import { useContext } from  "react";

... inside component below ...
const { menuShowing, setShowing } =  useContext(MenuContext);
```

12. have fun