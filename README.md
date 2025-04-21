# 🩺 Wekare360 - Referral Tracker Dashboard

This is a take-home assignment for a frontend engineering role at Wekare360. The app simulates a mini-dashboard for tracking patient referrals through different stages.

## 🔧 Tech Stack

- ReactJS
- NodeJS / JSON Server (mock backend)
- D3.js or chart.js (for bonus visualization)
- [Optional] Docker

## 💻 Features

- Patient list with referral status
- Detail view showing event timeline
- Filtering by status
- Responsive and clean layout

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone [wekare360_Patient_Referal_dashboard](https://github.com/saivenkat98/wekare360_Patient_Referal_dashboard)
cd wekare360_Patient_Referal_dashboard
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start JSON server for mock data

```bash
npx json-server --watch ../mock-data/db.json --port 3001
```

Make sure `patients.json` and `referrals.json` are merged into a valid `db.json` or served separately using custom routes.


### 4. Run the app
```bash
cd frontend
npm start
```

## 🗂 Data Structure

Located under `/backend`:

- `patients.json` — contains basic patient info
- `referrals.json` — maps patient IDs to referral event timelines

## 🧠 Assumptions

- Only a small set of patients and referrals are needed.
- Event timestamps are in ISO format and sorted.
- Frontend renders everything client-side.

## 📸 Screenshots

Landing Page:
<br/>
<img width="1440" alt="landing page" src="https://github.com/user-attachments/assets/2c5883e2-2b3e-4aba-8597-a093b63f5423" />
<br/>
<br/>
Referral details along with highlighting stage on hover:
<br/>
<img width="1440" alt="referral details" src="https://github.com/user-attachments/assets/f64e05c5-c742-410e-811b-b6363073debe" />
<br/>
<br/>
Referral details with the case of empty data:
<br/>
<img width="1440" alt="empty referral info" src="https://github.com/user-attachments/assets/c4253e17-3fff-48b9-bd65-417dfe5a107d" />
<br/>
<br/>
Filter Options:
<br/>
<img width="1440" alt="filter options" src="https://github.com/user-attachments/assets/588fa684-6c96-4bd3-95e2-c10f31bdf097" />
<br/>
<br/>
Filtered Results:
<br/>
<img width="389" alt="filtered results" src="https://github.com/user-attachments/assets/4f93550f-f8db-4610-b454-0d1089e5a166" />
<br/>
<br/>
Mobile screen experience:
<br/>
<img width="370" alt="Iphone12_screen" src="https://github.com/user-attachments/assets/e4e2495f-7349-4f2f-9c08-a4f47d10147b" />
<br/>
<br/>
Website browser tab:
<img width="832" alt="website_tab" src="https://github.com/user-attachments/assets/2d5a5b5d-7bbb-4e79-bc42-145525b6c5e3" />
<br/>
<br/>

## 🙌 Author

**Sai Venkat**  
Frontend Take-home Assignment – WeKare360  
[LinkedIn](https://www.linkedin.com/in/saivenkatkumar) | [GitHub](https://github.com/your-username)
