const { H, R } = window as any;

const App = () => {
  return H(
    "div",
    { className: "toast-area" },
    H(
      "div",
      { className: "toast-outer" },
      H(
        "div",
        { className: "toast-inner" },
        H("div", { className: "toast-message" }, "hi")
      )
    )
  );
};

R(H(App), document.getElementById("app"));
