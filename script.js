async function addSiteCount() {
    const myHeaders = new Headers();
    myHeaders.append("x-api-key", "kUh53lXPa83YXh8JNKabB3zV3B62QAI34wCTP05V");
    myHeaders.append("Content-Type", "application/json");
  
    const raw = JSON.stringify({
      "b-code": "B-rLNddCRRnBuAO24"
    });
  
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
  
    try {
      const response = await fetch("https://93bpuuyncj.execute-api.us-east-1.amazonaws.com/dev/add-site-count", requestOptions);
      const result = await response.text();
      console.log("API Response:", result);
      // Mark this user as counted
      localStorage.setItem("siteCounted", "true");
    } catch (error) {
      console.error("API call failed:", error);
    }
  }
  
  window.addEventListener("load", () => {
    const alreadyCounted = localStorage.getItem("siteCounted");
    if (!alreadyCounted) {
      addSiteCount();
    } else {
      console.log("User already counted. Skipping API call.");
    }
  });
  
