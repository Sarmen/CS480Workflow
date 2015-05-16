function workflowInstanceLog(workflowInstanceId, description, actionBy) {
  popup();
  Parse.initialize("ej29LXB9zHARKwcF5gHhkQ4SnJS7mGwWZ01qrZAa", "jTpvM9KVA9G9XteMyDD4nDcL6xNPVhg44zliTSrw");

  var WorkflowInstanceLog = Parse.Object.extend("WorkflowInstanceLog");
  var workflowInstanceLog = new WorkflowInstanceLog();
  
		workflowInstanceLog.save({
    WorkflowInstanceID: workflowInstanceId,
    Description: description,
    ActionBy: actionBy,
  }, {
    success: function(object) {
      alert("yay");
    },
    error: function(model, error) {
      alert("nay");
    }
  });
        }
      },
      error: function(error) {
        alert("Could not validate uniqueness for this BusStop object.");
      }
    });
}
function popup() {
  alert("don't push me");
}

function workflowInstIn(workflowInstanceId, description, actionBy){
  popup();
  Parse.initialize("ej29LXB9zHARKwcF5gHhkQ4SnJS7mGwWZ01qrZAa", "jTpvM9KVA9G9XteMyDD4nDcL6xNPVhg44zliTSrw");

  var WorkflowInstanceLog = Parse.Object.extend("WorkflowInstanceLog");
  var workflowInstanceLog = new WorkflowInstanceLog();
  var query = new Parse.Query(WorkflowUser);
  
  query.equalTo("WorkflowInstanceID", workflowInstanceId);
  query.first({
    success: function(workflowInstanceLog) {
      workflowInstanceLog.save(null, 
        success: function(workflowInstanceLog)
          workflowInstanceLog.set("Description", description);
          workflowInstanceLog.set("ActionBy", actionBy);
          workflowInstanceLog.save();
      });
      
    },
    error:function(results) {
      alert("woop");
    }
  });
}
