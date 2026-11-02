const demo = {
  members:[
    {name:"S. Ramya",plan:"Strength · 1 month",branch:"Current Office",expiry:"02 Nov 2026",status:"Renewal due"},
    {name:"A. Karthik",plan:"Fitness · 3 months",branch:"Pogathota",expiry:"03 Nov 2026",status:"Active"},
    {name:"N. Praveen",plan:"Strength · 1 month",branch:"Current Office",expiry:"04 Nov 2026",status:"Active"},
    {name:"F. Mahesh",plan:"Cardio · 6 months",branch:"Magunta Layout",expiry:"06 Nov 2026",status:"Active"},
    {name:"R. Prakash",plan:"Strength · 12 months",branch:"Current Office",expiry:"18 Feb 2027",status:"Active"},
    {name:"S. Kavya",plan:"Fitness · 3 months",branch:"Magunta Layout",expiry:"22 Jan 2027",status:"Active"},
    {name:"M. Vamsi",plan:"Strength · 1 month",branch:"Current Office",expiry:"28 Oct 2026",status:"Expired"}
  ],
  attendance:[
    {name:"R. Prakash",plan:"Member check-in",branch:"Current Office",expiry:"08:42 AM",status:"Present"},
    {name:"S. Kavya",plan:"Member check-in",branch:"Magunta Layout",expiry:"08:37 AM",status:"Present"},
    {name:"M. Vamsi",plan:"Membership renewal",branch:"Current Office",expiry:"08:21 AM",status:"Paid"},
    {name:"A. Karthik",plan:"Member check-in",branch:"Pogathota",expiry:"08:13 AM",status:"Present"}
  ],
  plans:[
    {name:"Strength",plan:"1 month",branch:"All locations",expiry:"₹2,000",status:"Active"},
    {name:"Fitness",plan:"3 months",branch:"All locations",expiry:"₹4,500",status:"Active"},
    {name:"Cardio",plan:"6 months",branch:"All locations",expiry:"₹7,500",status:"Active"},
    {name:"Annual",plan:"12 months",branch:"All locations",expiry:"Set by owner",status:"Active"}
  ],
  collections:[
    {name:"M. Vamsi",plan:"Membership renewal · UPI",branch:"Current Office",expiry:"₹2,000 · 02 Nov",status:"Paid"},
    {name:"S. Kavya",plan:"Personal training · Cash",branch:"Magunta Layout",expiry:"₹1,500 · 02 Nov",status:"Paid"},
    {name:"A. Karthik",plan:"Membership · UPI",branch:"Pogathota",expiry:"₹4,500 · 01 Nov",status:"Paid"},
    {name:"F. Mahesh",plan:"Membership · Card",branch:"Magunta Layout",expiry:"₹7,500 · 01 Nov",status:"Paid"},
    {name:"S. Ramya",plan:"Membership renewal",branch:"Current Office",expiry:"₹2,000 · Due today",status:"Due"}
  ],
  expenses:[
    {name:"Monthly rent",plan:"Facilities",branch:"Current Office",expiry:"₹48,000 · 01 Nov",status:"Paid"},
    {name:"Electricity bill",plan:"Utilities",branch:"Pogathota",expiry:"₹16,850 · 31 Oct",status:"Paid"},
    {name:"Cleaning supplies",plan:"Supplies",branch:"Magunta Layout",expiry:"₹3,200 · 30 Oct",status:"Review"},
    {name:"Equipment servicing",plan:"Maintenance",branch:"Current Office",expiry:"₹8,500 · 28 Oct",status:"Pending"}
  ],
  employees:[
    {name:"R. Harish",plan:"Head trainer",branch:"Current Office",expiry:"Full time",status:"Active"},
    {name:"P. Sravani",plan:"Fitness coach",branch:"Magunta Layout",expiry:"Full time",status:"Active"},
    {name:"M. Rafi",plan:"Front desk",branch:"Pogathota",expiry:"Full time",status:"Active"},
    {name:"K. Naveen",plan:"Trainer",branch:"Current Office",expiry:"Part time",status:"Active"}
  ],
  payroll:[
    {name:"R. Harish",plan:"Trainer · October",branch:"Current Office",expiry:"₹28,000",status:"Paid"},
    {name:"P. Sravani",plan:"Coach · October",branch:"Magunta Layout",expiry:"₹24,000",status:"Paid"},
    {name:"M. Rafi",plan:"Front desk · October",branch:"Pogathota",expiry:"₹18,000",status:"Pending"},
    {name:"K. Naveen",plan:"Trainer · October",branch:"Current Office",expiry:"₹12,000",status:"Review"}
  ],
  equipment:[
    {name:"Treadmill · TM-04",plan:"Cardio equipment",branch:"Current Office",expiry:"28 Oct · Belt alignment",status:"Review"},
    {name:"Cable station · CS-02",plan:"Strength equipment",branch:"Pogathota",expiry:"24 Oct · Routine service",status:"Active"},
    {name:"Air conditioner · AC-03",plan:"Facility",branch:"Magunta Layout",expiry:"21 Oct · Filter cleaning",status:"Pending"}
  ],
  reports:[
    {name:"Member collections",plan:"Income summary",branch:"October 2026",expiry:"₹2,46,800",status:"Ready"},
    {name:"Operating expenses",plan:"Expense summary",branch:"October 2026",expiry:"₹91,450",status:"Ready"},
    {name:"Membership dues",plan:"Receivables",branch:"All locations",expiry:"₹38,400",status:"Review"}
  ],
  settings:[
    {name:"Owner account",plan:"Owner · All permissions",branch:"All locations",expiry:"Admin",status:"Active"},
    {name:"Front desk",plan:"Manager · Member records",branch:"Current Office",expiry:"Manager",status:"Active"},
    {name:"Trainer account",plan:"Staff · Attendance only",branch:"Pogathota",expiry:"Staff",status:"Active"}
  ]
};
const moduleInfo = {
  members:{title:"Members",subtitle:"Profiles, memberships and renewals across your locations.",columns:["MEMBER","MEMBERSHIP","LOCATION","EXPIRY","STATUS"],metric:"1,248",label:"Active members"},
  attendance:{title:"Attendance",subtitle:"Daily check-ins and a searchable visit log.",columns:["MEMBER","EVENT","LOCATION","TIME","STATUS"],metric:"86",label:"Check-ins today"},
  plans:{title:"Plans & renewals",subtitle:"Membership options, pricing and upcoming expiries.",columns:["PLAN","TERM","LOCATION","PRICE","STATUS"],metric:"68",label:"Renewals this week"},
  collections:{title:"Collections",subtitle:"Member dues, renewals and payment ledger.",columns:["MEMBER","DESCRIPTION","LOCATION","AMOUNT · DATE","STATUS"],metric:"₹2,46,800",label:"Collected this month"},
  expenses:{title:"Expenses",subtitle:"Record operating costs and review pending payments.",columns:["EXPENSE / VENDOR","CATEGORY","LOCATION","AMOUNT · DATE","STATUS"],metric:"₹91,450",label:"Expenses this month"},
  employees:{title:"Employees",subtitle:"Staff profiles, roles, assigned locations and work status.",columns:["EMPLOYEE","ROLE","LOCATION","EMPLOYMENT","STATUS"],metric:"18",label:"Staff across locations"},
  payroll:{title:"Payroll",subtitle:"Monthly salary register and payment status.",columns:["EMPLOYEE","PAY PERIOD","LOCATION","AMOUNT","STATUS"],metric:"₹4,82,000",label:"Payroll this month"},
  equipment:{title:"Equipment log",subtitle:"Maintenance records, service dates and open issues.",columns:["ASSET","TYPE","LOCATION","LAST UPDATE","STATUS"],metric:"3",label:"Items to review"},
  reports:{title:"Reports",subtitle:"Exportable summaries for collections, expenses, dues and staff.",columns:["REPORT","TYPE","PERIOD","VALUE","STATUS"],metric:"4",label:"Ready to export"},
  settings:{title:"Settings & access",subtitle:"User roles, branch access and operating preferences.",columns:["USER","ROLE & ACCESS","LOCATION SCOPE","PERMISSION","STATUS"],metric:"3",label:"Demo portal users"}
};
const titles={dashboard:"Overview",members:"Members",attendance:"Attendance",plans:"Plans & renewals",collections:"Collections",expenses:"Expenses",employees:"Employees",payroll:"Payroll",equipment:"Equipment log",reports:"Reports",settings:"Settings & access"};
const $=selector=>document.querySelector(selector);
const $$=selector=>[...document.querySelectorAll(selector)];
const esc=value=>String(value??"").replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
const dashboard=$("#dashboardView");
const moduleView=$("#moduleView");
const dialog=$("#actionDialog");
let activeView="dashboard";
let formKind="member";
$("#todayDate").textContent=new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"});

function showView(view){
  activeView=view;
  $$(".portal-nav-item").forEach(item=>item.classList.toggle("active",item.dataset.view===view));
  $("#breadcrumb").textContent=titles[view]||"Overview";
  $("#pageTitle").innerHTML=view==="dashboard"?"Good morning, owner <span>✳</span>":esc(titles[view]);
  $("#pageSubtitle").textContent=view==="dashboard"?"Here’s a clear view of your gym today.":(moduleInfo[view]?.subtitle||"");
  dashboard.hidden=view!=="dashboard";
  moduleView.hidden=view==="dashboard";
  if(view!=="dashboard")renderModule(view);
  $("#globalSearch").value="";
  $("#sidebar").classList.remove("is-open");
}
function statusClass(status){
  const text=String(status).toLowerCase();
  if(text.includes("paid")||text.includes("active")||text.includes("present")||text.includes("ready"))return "state-active";
  if(text.includes("due")||text.includes("pending")||text.includes("review"))return "state-due";
  if(text.includes("expired")||text.includes("overdue"))return "state-expired";
  return "state-active";
}
function renderModule(view,search=""){
  const info=moduleInfo[view], rows=demo[view]||[];
  const filtered=rows.filter(row=>Object.values(row).some(value=>String(value).toLowerCase().includes(search.toLowerCase())));
  const tableRows=filtered.map(row=>{
    const values=[esc(row.name),esc(row.plan),esc(row.branch),esc(row.expiry),'<span class="state-badge '+statusClass(row.status)+'">'+esc(row.status)+'</span>'];
    return "<tr>"+values.map(value=>"<td>"+value+"</td>").join("")+"</tr>";
  }).join("");
  let action='<button class="button button-outline" data-action="export">Export report ↓</button>';
  if(view==="members")action='<button class="button button-lime" data-action="add-member">＋ Add member</button>';
  if(view==="collections")action='<button class="button button-lime" data-action="record-collection">＋ Record collection</button>';
  if(view==="expenses")action='<button class="button button-lime" data-action="add-expense">＋ Log expense</button>';
  if(view==="employees")action='<button class="button button-lime" data-action="add-employee">＋ Add employee</button>';
  if(view==="attendance")action='<button class="button button-outline" data-action="export">Export attendance ↓</button>';
  let strip="";
  if(view!=="reports")strip='<div class="module-stat-strip"><div class="module-stat"><small>'+esc(info.label.toUpperCase())+'</small><b>'+esc(info.metric)+'</b></div><div class="module-stat"><small>ACTIVE LOCATION</small><b class="small-stat">Current Office</b></div><div class="module-stat"><small>DATA STATUS</small><b class="small-stat"><span class="state-badge state-review">DEMO ONLY</span></b></div></div>';
  moduleView.innerHTML=strip+'<div class="module-toolbar"><p>'+filtered.length+' sample '+(filtered.length===1?"record":"records")+' shown · Changes are temporary in this browser.</p>'+action+'</div><div class="module-table-panel"><table><thead><tr>'+info.columns.map(col=>'<th>'+esc(col)+'</th>').join("")+'</tr></thead><tbody>'+(tableRows||'<tr><td colspan="5" class="empty-state">No matching sample records.</td></tr>')+'</tbody></table></div>';
}
function openDialog(kind){
  formKind=kind;
  const configs={
    member:{title:"Add a member",copy:"Create a sample member profile in this browser.",submit:"Add to demo",fields:[["Full name","name","text","Example: A. Reddy"],["Phone number","phone","tel","Optional"],["Membership plan","plan","select",["Strength · 1 month","Fitness · 3 months","Cardio · 6 months","Annual · 12 months"]],["Location","branch","select",["Current Office","Pogathota","Magunta Layout","Stonehousepet"]]]},
    collection:{title:"Record a collection",copy:"Add a fictional receipt to the demo collection ledger.",submit:"Record in demo",fields:[["Member / payer","name","text","Example: A. Reddy"],["Amount (₹)","amount","number","0"],["Payment method","method","select",["UPI","Cash","Card","Bank transfer"]],["Location","branch","select",["Current Office","Pogathota","Magunta Layout","Stonehousepet"]]]},
    expense:{title:"Log an expense",copy:"Add a fictional operating expense for this demo.",submit:"Add expense",fields:[["Expense / vendor","name","text","Example: Cleaning supplies"],["Amount (₹)","amount","number","0"],["Category","category","select",["Rent","Utilities","Payroll","Equipment","Supplies","Other"]],["Location","branch","select",["Current Office","Pogathota","Magunta Layout","Stonehousepet"]]]},
    employee:{title:"Add an employee",copy:"Add a fictional employee profile to the demo.",submit:"Add employee",fields:[["Full name","name","text","Example: K. Reddy"],["Role","role","select",["Trainer","Fitness coach","Front desk","Branch manager","Cleaner"]],["Location","branch","select",["Current Office","Pogathota","Magunta Layout","Stonehousepet"]],["Employment type","type","select",["Full time","Part time","Contract"]]]}
  }[kind];
  $("#dialogTitle").textContent=config.title;
  $("#dialogCopy").textContent=config.copy;
  $("#submitDialog").textContent=config.submit;
  $("#formFields").innerHTML=config.fields.map((field,index)=>{
    const label=field[0],name=field[1],type=field[2],options=field[3];
    const control=type==="select"?'<select name="'+name+'" required>'+options.map(value=>'<option>'+esc(value)+'</option>').join("")+'</select>':'<input name="'+name+'" type="'+type+'" placeholder="'+esc(options)+'" '+(name==="amount"?'min="0" step="1"':"")+' '+(name==="name"?"required":"")+'>';
    return '<div class="form-field '+(index===0?"full":"")+'"><label>'+esc(label)+'</label>'+control+'</div>';
  }).join("");
  dialog.showModal();
}
function exportCurrent(){
  const rows=demo[activeView]||[];
  const csv=["Name,Description,Location,Value,Status",...rows.map(row=>[row.name,row.plan,row.branch,row.expiry,row.status].map(value=>'"'+String(value).replaceAll('"','""')+'"').join(","))].join("\n");
  const url=URL.createObjectURL(new Blob([csv],{type:"text/csv"}));
  const anchor=document.createElement("a");anchor.href=url;anchor.download="slim-life-"+activeView+"-demo.csv";anchor.click();URL.revokeObjectURL(url);
}
$$(".portal-nav-item").forEach(item=>item.addEventListener("click",()=>showView(item.dataset.view)));
document.addEventListener("click",event=>{
  const goto=event.target.closest("[data-goto]");
  if(goto){showView(goto.dataset.goto);return;}
  const action=event.target.closest("[data-action]");
  if(!action)return;
  const name=action.dataset.action;
  if(name==="add-member")openDialog("member");
  if(name==="record-collection")openDialog("collection");
  if(name==="add-expense")openDialog("expense");
  if(name==="add-employee")openDialog("employee");
  if(name==="export")exportCurrent();
});
$("#actionForm").addEventListener("submit",event=>{
  event.preventDefault();
  const data=Object.fromEntries(new FormData(event.currentTarget).entries());
  const branch=data.branch||"Current Office";
  if(formKind==="member"){
    demo.members.unshift({name:data.name,plan:data.plan,branch,expiry:"New member",status:"Active"});activeView="members";
  }else if(formKind==="collection"){
    demo.collections.unshift({name:data.name,plan:"Collection · "+data.method,branch,expiry:"₹"+Number(data.amount||0).toLocaleString("en-IN")+" · Today",status:"Paid"});activeView="collections";
  }else if(formKind==="expense"){
    demo.expenses.unshift({name:data.name,plan:data.category,branch,expiry:"₹"+Number(data.amount||0).toLocaleString("en-IN")+" · Today",status:"Review"});activeView="expenses";
  }else{
    demo.employees.unshift({name:data.name,plan:data.role,branch,expiry:data.type,status:"Active"});activeView="employees";
  }
  dialog.close();showView(activeView);
});
$("#cancelDialog").addEventListener("click",()=>dialog.close());
$("#globalSearch").addEventListener("input",event=>{if(activeView!=="dashboard")renderModule(activeView,event.target.value);});
$("#sidebarToggle").addEventListener("click",()=>$("#sidebar").classList.toggle("is-open"));
document.addEventListener("keydown",event=>{if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==="k"){event.preventDefault();$("#globalSearch").focus();}});
showView("dashboard");
