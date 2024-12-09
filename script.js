// element penting
// 1. element input
const input = document.getElementById("taskInput");

// 2. element button
const btn = document.getElementById("addTaskBtn");

// 3. element ul
const ulList = document.getElementById("taskList");

// fungsi ketika button di klik
function addBtn() {
  const inputTrim = input.value.trim();

  if (inputTrim === "") {
    alert("Harap Masukkan List!!!");
    return;
  }

  //   buat <li>
  const li = document.createElement("li");
  li.textContent = inputTrim;

  //   buat <button>selesai</button>
  const btnClear = document.createElement("button");
  btnClear.textContent = "Finished";
  btnClear.addEventListener("click", () => {
    li.style.textDecoration =
      li.style.textDecoration === "line-through" ? "none" : "line-through";
  });

  btnClear.addEventListener("click", () => {
    li.classList.toggle("italic");
  });

  btnClear.addEventListener("click", () => {
    li.classList.toggle("text-slate-600");
  });

  //   buat <button>hapus</button>
  const btnRemove = document.createElement("button");
  btnRemove.textContent = "Delete";

  // hapus li ketika btnHapus ditekan
  btnRemove.addEventListener("click", () => {
    ulList.removeChild(li);
  });

  //   masukkan button remove dan add ke li
  li.appendChild(btnClear);
  li.appendChild(btnRemove);

  // style li
  li.classList.add(
    "relative",
    "bg-slate-200",
    "w-full",
    "text-lg",
    "font-bold",
    "text-slate-800",
    "pl-5",
    "px-2",
    "py-4",
    "mb-4",
    "border",
    "rounded-lg",
    "shadow-md"
  );

  // style btnClear
  btnClear.classList.add(
    "absolute",
    "right-2",
    "top-2",
    "mr-20",
    "text-base",
    "text-slate-200",
    "-mr-1",
    "px-3",
    "py-2",
    "bg-green-500",
    "rounded-md",
    "hover:shadow-md",
    "hover:bg-green-700"
  );

  // style btnRemove
  btnRemove.classList.add(
    "absolute",
    "top-2",
    "right-1",
    "mr-1",
    "text-base",
    "text-slate-200",
    "-mr-1",
    "px-3",
    "py-2",
    "bg-red-500",
    "rounded-md",
    "hover:shadow-md",
    "hover:bg-red-700"
  );

  //   masukkan li ke ul
  ulList.appendChild(li);
  input.value = "";
}

btn.addEventListener("click", addBtn);
