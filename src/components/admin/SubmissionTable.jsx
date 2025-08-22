import { Search, Filter, FileText, ExternalLink, Check, Clock, AlertCircle, User, BookOpen } from "lucide-react";
import { difficultyCourse } from "../../config/difficultyCourse";

const SkeletonRow = () => {
  return (
    <tr>
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
      </td>
      <td className="px-6 py-4">
        <div className="h-4 bg-gray-200 rounded w-28 animate-pulse"></div>
      </td>
      <td className="px-6 py-4">
        <div className="h-6 bg-gray-200 rounded-full w-20 animate-pulse"></div>
      </td>
      <td className="px-6 py-4">
        <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
      </td>
      <td className="px-6 py-4">
        <div className="h-6 bg-gray-200 rounded-full w-16 animate-pulse"></div>
      </td>
      <td className="px-6 py-4">
        <div className="h-8 bg-gray-200 rounded w-20 animate-pulse"></div>
      </td>
    </tr>
  );
};

const SubmissionTable = ({ data, isLoading, isError, error, update, isPending }) => {
  const actualData = isLoading ? [] : data || [];
  const pendingCount = actualData.filter(sub => !sub.approved).length;
  const approvedCount = actualData.filter(sub => sub.approved).length;

  // Error State
  if (isError) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="px-6 py-12 text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-8 h-8 text-red-500" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Failed to Load Submissions</h3>
          <p className="text-red-600 text-sm">{error?.message || "Something went wrong"}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 px-6 py-5 border-b border-gray-100">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Submissions Management</h2>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                {isLoading ? '...' : actualData.length} total
              </span>
              {!isLoading && (
                <>
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                    {pendingCount} pending
                  </span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    {approvedCount} approved
                  </span>
                </>
              )}
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search submissions..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm w-64"
              />
            </div>
            
            {/* Filter Button */}
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <Filter className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  User
                </div>
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  Course
                </div>
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Chapter
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Difficulty
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Proof
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {isLoading ? (
              Array.from({ length: 5 }).map((_, idx) => (
                <SkeletonRow key={idx} />
              ))
            ) : actualData.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-6 py-12 text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                      <FileText className="w-8 h-8 text-gray-400" />
                    </div>
                    <p className="text-gray-500 text-lg font-medium">No submissions found</p>
                    <p className="text-gray-400 text-sm mt-1">Submissions will appear here once students submit their work</p>
                  </div>
                </td>
              </tr>
            ) : (
              actualData.map((submission) => (
                <tr 
                  key={`${submission.chapter_id}-${submission.user_id}`} 
                  className="hover:bg-purple-50/50 transition-colors duration-150 group"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-semibold text-gray-900">
                          {submission.user?.full_name || "Unknown User"}
                        </div>
                      </div>
                    </div>
                  </td>
                  
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">
                      {submission.chapter?.course?.title || "Unknown Course"}
                    </div>
                  </td>
                  
                  <td className="px-6 py-4">
                    <div className="text-gray-700">
                      {submission.chapter?.title || "Unknown Chapter"}
                    </div>
                  </td>
                  
                  <td className="px-6 py-4">
                    {(() => {
                      const difficulty = submission.chapter?.course?.difficulty;
                      const difficultyConfig = difficultyCourse[difficulty];
                      
                      return difficultyConfig ? (
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${difficultyConfig.color}`}>
                          <div className="w-1.5 h-1.5 rounded-full bg-current mr-2"></div>
                          {difficultyConfig.label}
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-current mr-2"></div>
                          Unknown
                        </span>
                      );
                    })()}
                  </td>
                  
                  <td className="px-6 py-4">
                    <a
                      href={submission.proof_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 hover:bg-purple-50 px-3 py-1 rounded-lg transition-colors text-sm font-medium"
                    >
                      <ExternalLink className="w-3 h-3" />
                      View Proof
                    </a>
                  </td>
                  
                  <td className="px-6 py-4">
                    {submission.approved ? (
                      <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                        <Check className="w-3 h-3" />
                        Approved
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold">
                        <Clock className="w-3 h-3" />
                        Pending
                      </span>
                    )}
                  </td>
                  
                  <td className="px-6 py-4 text-center">
                    {!submission.approved ? (
                      <button
                        disabled={isPending}
                        onClick={() =>
                          update({
                            approved: true,
                            chapter_id: submission.chapter_id,
                            user_id: submission.user_id,
                          })
                        }
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-lg transition-all duration-200 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg transform hover:-translate-y-0.5 disabled:transform-none"
                      >
                        {isPending ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Approving...
                          </>
                        ) : (
                          <>
                            <Check className="w-4 h-4" />
                            Approve
                          </>
                        )}
                      </button>
                    ) : (
                      <span className="text-gray-400 text-sm font-medium">
                        Already approved
                      </span>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      
      {/* Footer with statistics */}
      {!isLoading && actualData.length > 0 && (
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6 text-gray-600">
              <span>Total: <span className="font-semibold">{actualData.length}</span> submissions</span>
              <span className="text-yellow-600">
                Pending: <span className="font-semibold">{pendingCount}</span>
              </span>
              <span className="text-green-600">
                Approved: <span className="font-semibold">{approvedCount}</span>
              </span>
            </div>
            
            <div className="text-gray-500">
              {pendingCount > 0 && (
                <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-medium">
                  {pendingCount} submissions need review
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubmissionTable;